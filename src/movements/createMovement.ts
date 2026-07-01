import { db } from '../database/connectDatabase';
import { movements } from '../database/schemas';
import { CreateMovementDTO } from './movementsDTO/createMovementDTO';
import { users } from '../database/schemas';
import { eq } from 'drizzle-orm';
export async function createMovement(dto: CreateMovementDTO) {
  try {
    if (
      !dto.movementName ||
      !dto.userId ||
      !dto.movementType ||
      !dto.ammount ||
      !dto.description ||
      !dto.date ||
      !dto.category
    ) {
      throw new Error('Please provide all the fields');
    }

    //validate the movement type
    const movementType = dto.movementType as string;
    if (
      movementType !== 'INCOME' &&
      movementType !== 'EXPENSE' &&
      movementType !== 'TRANSFER'
    ) {
      throw new Error('Invalid movement type');
    }
    const findUser = await db
      .select()
      .from(users)
      .where(eq(users.id, dto.userId));

    if (findUser.length === 0) {
      throw new Error('User not found');
    }

    const newMovement = await db.insert(movements).values({
      movementName: dto.movementName,
      userId: findUser[0].id,
      type: dto.movementType,
      amount: dto.ammount,
      description: dto.description,
      category: dto.category,
      date: dto.date,
    });

    return newMovement;
  } catch (error) {
    throw new Error(`Error creating movement: ${error.message}`);
  }
}
