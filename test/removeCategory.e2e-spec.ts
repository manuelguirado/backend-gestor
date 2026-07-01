import { describe, it, expect } from '@jest/globals';
import { removeCategory } from '../src/categories/removeCategory';
describe('removeCategory', () => {
  it('should remove a category successfully', async () => {
    const categoryName = 'Test Category';
    // Assuming the category exists in the database for this test
    const result = await removeCategory({ categoryName });
    expect(result).toBeDefined();
    expect(result.affectedRows).toBeGreaterThan(0);
  });

  it('should throw an error if the category does not exist', async () => {
    const categoryName = 'Nonexistent Category';
    await expect(removeCategory({ categoryName })).rejects.toThrow(
      'Category not found',
    );
  });
});
