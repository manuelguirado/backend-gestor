import { db } from '../database/connectDatabase';
import { eq } from 'drizzle-orm';
import { categories } from '../database/schemas';
import { CreateCategoryDTO } from './categoryDTO/createCategoryDTO';
import { users } from '../database/schemas';
export async function createCategory(dto: CreateCategoryDTO) {
  console.log('Received DTO:', dto);
  try {
    if (!dto.name || !dto.description || !dto.userId) {
      throw new Error('Missing required fields');
    }

    const userId = Number(dto.userId);
    if (Number.isNaN(userId)) {
      throw new Error('Invalid userId');
    }
    const findCategory = await db
      .select()
      .from(categories)
      .where(eq(categories.name, dto.name));
    if (!findCategory) {
      throw new Error('category does exist');
    }
    const findUSer = await db
      .select()
      .from(users)
      .where(eq(users.id, userId))
      .get();

    if (!findUSer) {
      throw new Error('User not found');
    }

    const newCategory = await db
      .insert(categories)
      .values({
        name: dto.name,
        description: dto.description,
        userId,
      })
      .returning();
    return newCategory;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Error creating category:', message);
    throw new Error('Failed to create category');
  }
}
