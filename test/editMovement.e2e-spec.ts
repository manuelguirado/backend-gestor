import { describe, it, expect } from '@jest/globals';
import { editMovement } from '../src/movements/editMovement';
import { editMomentDTO } from '../src/movements/movementsDTO/editMovementDTO';

describe('editMovement', () => {
  it('should edit an existing movement successfully', async () => {
    const dto = new editMomentDTO(
      'shop movement',
      4,
      'EXPENSE',
      'shopping',
      150,
      'This is an updated test movement',
    );
    const date = new Date().toISOString();

    console.log('DTO for editing movement:', dto);

    const result = await editMovement(dto.movementName, {
      userId: 4,
      ammount: dto.ammount,
      description: dto.description,
      date,
      type: dto.type,
    });

    expect(result).toBeDefined();
  });

  it('should throw an error if the movement is not found', async () => {
    const dto = new editMomentDTO(
      'nonexistent movement',
      4,
      'EXPENSE',
      'shopping',
      150,
      'This is an updated test movement',
    );

    await expect(
      editMovement(dto.movementName, {
        userId: 4,
        type: dto.type,
        ammount: dto.ammount,
        description: dto.description,
        date: new Date().toISOString(),
      }),
    ).rejects.toThrow('Movement not found');
  });

  it('should throw an error if the movement name is not provided', async () => {
    const dto = new editMomentDTO(
      '',
      4,
      'EXPENSE',
      'shopping',
      150,
      'This is an updated test movement',
    );

    await expect(
      editMovement(dto.movementName, {
        userId: 4,
        type: dto.type,
        ammount: dto.ammount,
        description: dto.description,
        date: new Date().toISOString(),
      }),
    ).rejects.toThrow('Movement name is required');
  });
});
