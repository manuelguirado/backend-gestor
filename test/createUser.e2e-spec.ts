import { describe, it, expect } from '@jest/globals';
import { userRegister } from '../src/auth/userRegister';
describe('userRegister', () => {
  it('should create a new user with valid input', async () => {
    const name = 'John Doe3';
    const email = 'john.doe3@example.com';
    const password = 'password123';

    const user = await userRegister({ name, email, password });

    expect(user).toHaveProperty('name', name);
    expect(user).toHaveProperty('email', email);
  });
});
