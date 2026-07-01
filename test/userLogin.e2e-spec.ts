import { describe, it, expect } from '@jest/globals';
import { userLogin } from '../src/auth/userLogin';
describe('userLogin', () => {
  it('should log in a user with valid credentials', async () => {
    const email = 'john.doe@example.com';
    const password = 'password123';

    const user = await userLogin({ email, password });

    expect(user).toHaveProperty('email', email);
  });
  it('should throw an error for invalid credentials', async () => {
    const email = 'jhondoe@gmail.com';
    const password = 'wrongpassword';

    await expect(userLogin({ email, password })).rejects.toThrow(
      'Failed to log in user',
    );
  });
});
