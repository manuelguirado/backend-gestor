import { db } from '../database/connectDatabase';
import { categories } from '../database/schemas';
import { eq } from 'drizzle-orm';
import { removveCategoryDTO } from './categoryDTO/removeCategoryDTO';

export async function removeCategory(dto: removveCategoryDTO) {
  try {
    if (!dto.name) {
      throw new Error('Category name is required');
    }
    const categoryToRemove = await db
      .select()
      .from(categories)
      .where(eq(categories.name, dto.name))
      .execute();
    if (categoryToRemove.length === 0) {
      throw new Error('Category not found');
    }
    const deletedCategory = await db
      .delete(categories)
      .where(eq(categories.name, dto.name))
      .execute();
    return deletedCategory;
  } catch (error) {
    console.error('Error removing category:', error);
    throw error;
  }
}
