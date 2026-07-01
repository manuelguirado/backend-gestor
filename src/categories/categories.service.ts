import { Injectable } from '@nestjs/common';
import { CreateCategoryDTO } from './categoryDTO/createCategoryDTO';
import { createCategory } from './createCategory';
import { EditCategoryDTO } from './categoryDTO/editCategoryDTO';
import { editCategory } from './editCategory';
import { removeCategory } from './removeCategory';
import { removveCategoryDTO } from './categoryDTO/removeCategoryDTO';
@Injectable()
export class CategoriesService {
  async createCategory(dto: CreateCategoryDTO) {
    return await createCategory(dto);
  }
  async editCategory(dto: EditCategoryDTO) {
    return await editCategory(dto);
  }
  async removecategory(dto: removveCategoryDTO) {
    return await removeCategory(dto);
  }
}
