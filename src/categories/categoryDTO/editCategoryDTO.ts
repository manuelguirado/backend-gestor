import { IsString, IsOptional } from 'class-validator';

export class EditCategoryDTO {
  categoryName: string;
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
  constructor(categoryName: string, name: string, description?: string) {
    this.categoryName = categoryName;
    this.name = name;
    this.description = description;
  }
}
