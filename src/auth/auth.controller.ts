import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRegisterDTO } from './DTOs/userDTO';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('registerUser')
  async register(@Body() dto: UserRegisterDTO) {
    return await this.authService.registerUser(dto);
  }

  @Post('userLogin')
  async login(@Body() dto: UserRegisterDTO) {
    return await this.authService.loginUser(dto);
  }
}
