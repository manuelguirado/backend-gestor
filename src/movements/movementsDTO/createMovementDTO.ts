import { IsString, IsDateString, IsNumber, IsNotEmpty } from 'class-validator';
import type { MovementType } from 'src/types/movementType';
export class CreateMovementDTO {
  @IsString()
  @IsNotEmpty()
  movementName: string;
  @IsNumber()
  @IsNotEmpty()
  userId: number;
  @IsString()
  @IsNotEmpty()
  movementType: MovementType;
  @IsNumber()
  @IsNotEmpty()
  ammount: number;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsDateString()
  @IsNotEmpty()
  date: string;
  @IsString()
  @IsNotEmpty()
  category: string;
  constructor(
    name: string,
    userId: number,
    movementType: MovementType,
    category: string,
    ammount: number,
    descripton: string,
    date: string,
  ) {
    this.movementName = name;
    this.userId = userId;
    this.movementType = movementType;
    this.ammount = ammount;
    this.description = descripton;
    this.date = date;
    this.category = category;
  }
}
