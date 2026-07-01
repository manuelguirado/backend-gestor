import { db } from '../database/connectDatabase';
import { movements } from '../database/schemas';
import { eq, like, or } from 'drizzle-orm';
import { editMovementDTO } from './movementsDTO/editMovementDTO';

export async function editMovement(movementName: string, dto: editMovementDTO) {
  try {
    const normalizedName = movementName?.trim();
    if (!normalizedName) {
      throw new Error('Movement name is required');
    }

    const findMovement = await db
      .select()
      .from(movements)
      .where(
        or(
          eq(movements.movementName, normalizedName),
          like(movements.movementName, `%${normalizedName}%`),
        ),
      )
      .limit(1);

    if (findMovement.length === 0) {
      throw new Error('Movement not found');
    }

    const updateData: Partial<editMovementDTO> = {};
    if (dto.movementName) {
      updateData.movementName = dto.movementName;
    }
    if (dto.amount !== undefined) {
      updateData.amount = dto.amount;
    }
    if (dto.description) {
      updateData.description = dto.description;
    }
    if (dto.date) {
      updateData.date = dto.date;
    }
    if (dto.type) {
      updateData.type = dto.type;
    }

    const result = await db
      .update(movements)
      .set(updateData)
      .where(eq(movements.movementName, findMovement[0].movementName));

    return result;
  } catch (error) {
    throw new Error(`Error editing movement: ${error.message}`);
  }
}
