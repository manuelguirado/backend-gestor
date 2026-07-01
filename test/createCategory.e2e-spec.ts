import { describe, it, expect } from '@jest/globals';
import { createCategory } from '../src/categories/createCategory';
describe('createCategory', () => {
  it('should create a new category successfully', async () => {
    const dto = {
      name: 'Test Category',
      description: 'This is a test category',
      userId: 1, // Assuming user with ID 1 exists in the database
    };

    const result = await createCategory({
      name: dto.name,
      description: dto.description,
      userId: dto.userId,
    });
    expect(result).toBeDefined();
  });
  it('should throw an error if required fields are missing', async () => {
    const dto = {
      name: '',
      description: 'This is a test category',
      userId: 1,
    };

    await expect(
      createCategory({
        name: dto.name,
        description: dto.description,
        userId: dto.userId,
      }),
    ).rejects.toThrow('Missing required fields');
  });

  it('should throw an error if userId is invalid', async () => {
    const dto = {
      name: 'Test Category',
      description: 'This is a test category',
      userId: NaN, // Invalid userId
    };

    await expect(
      createCategory({
        name: dto.name,
        description: dto.description,
        userId: dto.userId,
      }),
    ).rejects.toThrow('Invalid userId');
  });

  it('should throw an error if user is not found', async () => {
    const dto = {
      name: 'Test Category',
      description: 'This is a test category',
      userId: 9999, // Assuming user with ID 9999 does not exist
    };

    await expect(
      createCategory({
        name: dto.name,
        description: dto.description,
        userId: dto.userId,
      }),
    ).rejects.toThrow('User not found');
  });
});
