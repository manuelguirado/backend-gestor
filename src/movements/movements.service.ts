import { Injectable } from '@nestjs/common';
import { CreateMovementDTO } from './movementsDTO/createMovementDTO';
import { createMovement } from './createMovement';
import { editMovement } from './editMovement';
import { editMovementDTO } from './movementsDTO/editMovementDTO';
import { removeMovementDTO } from './movementsDTO/removeMovementDTO';
import { removeMovements } from './removeMovements';

@Injectable()
export class MovementsService {
  async createMovement(dto: CreateMovementDTO) {
    return await createMovement(dto);
  }
  async editMovement(movementName: string, dto: editMovementDTO) {
    return await editMovement(movementName, dto);
  }
  async removeMovements(dto: removeMovementDTO) {
    return await removeMovements(dto);
  }
}
