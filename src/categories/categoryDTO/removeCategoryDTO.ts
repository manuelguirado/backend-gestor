import { IsString, IsNotEmpty } from 'class-validator';

export class removveCategoryDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
