import { db } from '../database/connectDatabase';
import { categories } from '../database/schemas';
import { eq } from 'drizzle-orm';
import { EditCategoryDTO } from './categoryDTO/editCategoryDTO';
export async function editCategory(category: EditCategoryDTO) {
  try {
    if (!category.categoryName) {
      throw new Error('Category name is required');
    }
    const categoryToUpdate = await db
      .select()
      .from(categories)
      .where(eq(categories.name, category.categoryName))
      .execute();
    if (categoryToUpdate.length === 0) {
      throw new Error('Category not found');
    }
    const updatedCategory = await db
      .update(categories)
      .set({
        name: category.name,
        description: category.description,
      })
      .where(eq(categories.name, category.categoryName))
      .execute();
    return updatedCategory;
  } catch (error) {
    console.error('Error editing category:', error);
    throw error;
  }
}
