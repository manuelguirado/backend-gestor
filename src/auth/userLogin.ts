import { db } from '../database/connectDatabase';
import { eq } from 'drizzle-orm';
import { users } from '../database/schemas';
import { verifyPassword } from '../utils/verifyPassword';
import { UserRegisterDTO } from './DTOs/userDTO';
export async function userLogin(dto: UserRegisterDTO) {
  try {
    if (!dto.email || !dto.password) {
      throw new Error('Missing required fields');
    }
    const user = await db
      .select()
      .from(users)
      .where(eq(users.email, dto.email))
      .get();
    if (!user) {
      throw new Error('User not found');
    }
    const isPasswordValid = await verifyPassword(dto.password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }
    return user;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Error logging in user:', message);
    throw new Error('Failed to log in user');
  }
}
