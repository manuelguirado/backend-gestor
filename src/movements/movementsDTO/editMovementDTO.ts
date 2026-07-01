import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsNumber,
  IsDateString,
} from 'class-validator';
import type { MovementType } from 'src/types/movementType';
export class editMovementDTO {
  @IsString()
  @IsNotEmpty()
  movementName: string;
  @IsString()
  @IsOptional()
  name?: string;
  @IsNumber()
  @IsOptional()
  amount?: number;
  @IsString()
  @IsOptional()
  description?: string;
  @IsDateString()
  @IsOptional()
  date?: string;
  @IsString()
  @IsOptional()
  type?: MovementType;

  constructor(
    movementName: string,
    name?: string,
    amount?: number,
    description?: string,
    date?: string,
    type?: MovementType,
  ) {
    this.movementName = movementName;
    this.name = name;
    this.amount = amount;
    this.description = description;
    this.date = date;
    this.type = type;
  }
}
