import { describe, it, expect } from '@jest/globals';
import { createMovement } from '../src/movements/createMovement';
import { CreateMovementDTO } from '../src/movements/movementsDTO/createMovementDTO';
describe('createMovement', () => {
  it('should create a new movement successfully', async () => {
    const dto = new CreateMovementDTO(
      'ocio ',
      4, // Assuming user with ID 1 exists in the database
      'EXPENSE',
      'shopping',
      100,
      'This is a test movement2',
      new Date().toISOString(),
    );
    const result = await createMovement({
      movementName: dto.movementName,
      userId: dto.userId,
      MovementType: dto.MovementType,
      category: dto.category,
      ammount: dto.ammount,
      description: dto.description,
      date: dto.date,
    });
    expect(result).toBeDefined();
  });
  it('should throw an error if required fields are missing', async () => {
    const dto = new CreateMovementDTO(
      '',
      1,
      'INCOME',
      'Test Category',
      100,
      'This is a test movement',
      new Date().toISOString(),
    );
    await expect(createMovement(dto)).rejects.toThrow(
      'Please provide all the fields',
    );
  });
  it('should throw an error if movement type is invalid', async () => {
    const dto = new CreateMovementDTO(
      'Test Movement',
      1,
      'INVALID_TYPE' as any, // Invalid movement type
      'Test Category',
      100,
      'This is a test movement',
      new Date().toISOString(),
    );
    await expect(createMovement(dto)).rejects.toThrow('Invalid movement type');
  });
  it('should throw an error if user is not found', async () => {
    const dto = new CreateMovementDTO(
      'Test Movement',
      9999, // Assuming user with ID 9999 does not exist
      'INCOME',
      'Test Category',
      100,
      'This is a test movement',
      new Date().toISOString(),
    );
    await expect(createMovement(dto)).rejects.toThrow('User not found');
  });
});
