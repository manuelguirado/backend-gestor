import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCategoryDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
  @IsNumber()
  @IsNotEmpty()
  userId: number;
  constructor(name: string, userId: number, description?: string) {
    this.name = name;
    this.description = description;
    this.userId = userId;
  }
}
