import { eq } from 'drizzle-orm';
import { db } from '../database/connectDatabase';
import { movements } from '../database/schemas';
import { removeMovementDTO } from './movementsDTO/removeMovementDTO';

export async function removeMovements(movement: removeMovementDTO) {
  try {
    if (!movement.movementname) {
      throw new Error('Please provide the name of the movement');
    }

    const findMovement = await db
      .select()
      .from(movements)
      .where(eq(movements.movementName, movement.movementname))
      .execute();

    if (findMovement.length === 0) {
      throw new Error('Movement not found');
    }

    const deleteMovements = await db
      .delete(movements)
      .where(eq(movements.movementName, movement.movementname))
      .execute();

    return deleteMovements;
  } catch (error) {
    throw new Error('error removing the movement: ' + String(error));
  }
}
