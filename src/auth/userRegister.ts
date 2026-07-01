import { eq } from 'drizzle-orm';
import { db } from '../database/connectDatabase';
import { UserRegisterDTO } from './DTOs/userDTO';

import { users } from '../database/schemas';
import { hashPassword } from '../utils/hashPassword';

export async function userRegister(dto: UserRegisterDTO) {
  try {
    if (!dto.email || !dto.password || !dto.name) {
      throw new Error('Missing required fields');
    }

    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    const isValidEmail = re.test(dto.email);
    if (!isValidEmail) {
      throw new Error('Invalid email format');
    }
    if (dto.password.length < 6) {
      throw new Error('Password must be at least 6 characters long');
    }

    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, dto.email))
      .get();
    if (existingUser) {
      throw new Error('User with this email already exists');
    }
    const hashedPassword = await hashPassword(dto.password);
    const newUser = await db.insert(users as any).values({
      name: dto.name,
      email: dto.email,
      password: hashedPassword,
    });

    return newUser;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Error registering user:', message);
    throw new Error('Failed to register user');
  }
}
