import { Injectable } from '@nestjs/common';
import { userRegister } from './userRegister';
import { userLogin } from './userLogin';

import { UserRegisterDTO } from './DTOs/userDTO';

@Injectable()
export class AuthService {
  async registerUser(dto: UserRegisterDTO) {
    return await userRegister(dto);
  }

  async loginUser(dto: UserRegisterDTO) {
    return await userLogin(dto);
  }
}
