import { Controller, Post, Body, Patch } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDTO } from './categoryDTO/createCategoryDTO';
import { EditCategoryDTO } from './categoryDTO/editCategoryDTO';
import { removveCategoryDTO } from './categoryDTO/removeCategoryDTO';
@Controller('categories')
export class CategoriesController {
  constructor(private readonly CategoriesService: CategoriesService) {}
  @Post('CreateCategory')
  async createCategory(@Body() dto: CreateCategoryDTO) {
    return await this.CategoriesService.createCategory(dto);
  }
  @Post('removeCategory')
  async removecategory(@Body() dto: removveCategoryDTO) {
    return await this.CategoriesService.removecategory(dto);
  }
  @Patch('editCategory')
  async editCategory(@Body() dto: EditCategoryDTO) {
    return await this.CategoriesService.editCategory(dto);
  }
}
