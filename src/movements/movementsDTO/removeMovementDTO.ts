import { IsString, IsNotEmpty } from 'class-validator';
export class removeMovementDTO {
  @IsString()
  @IsNotEmpty()
  movementname: string;
  constructor(movementname: string) {
    this.movementname = movementname;
  }
}
