import bcrypt from 'bcryptjs';
export async function verifyPassword(
  password: string,
  hashedPassword: string,
): Promise<boolean> {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  if (!isMatch) {
    throw new Error('Invalid password');
  }
  return isMatch;
}
