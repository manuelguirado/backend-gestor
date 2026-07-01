import { describe, it, expect } from '@jest/globals';
import { editCategory } from '../src/categories/editCategory';
describe('editCategory', () => {
  it('should edit a category successfully', async () => {
    const categoryName = 'Test Category';
    const updatedData = { categoryName, name: 'Updated Category Name' };
    const result = await editCategory(updatedData);
    expect(result).toBeDefined();
  });

  it('should throw an error if the category does not exist', async () => {
    const categoryName = 'Nonexistent Category';
    const updatedData = { categoryName, name: 'Updated Category Name' };
    const editCategoryPromise = editCategory(updatedData);
    await expect(editCategoryPromise).rejects.toThrow('Category not found');
  });
});
