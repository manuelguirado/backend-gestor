import { describe, it, expect } from '@jest/globals';
import { removeMovements } from '../src/movements/removeMovements';
import { removeMovementDTO } from '../src/movements/movementsDTO/removeMovementDTO';
describe('removeCategory', () => {
  it('should remove a category successfully', async () => {
    const movementName = new removeMovementDTO('ocio');
    // Assuming the category exists in the database for this test
    const result = await removeMovements({
      movementName: movementName.movementName,
    });
    expect(result).toBeDefined();
  });
});
