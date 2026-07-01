import { Controller, Body, Post, Patch } from '@nestjs/common';
import { MovementsService } from './movements.service';
import { CreateMovementDTO } from './movementsDTO/createMovementDTO';
import { removeMovementDTO } from './movementsDTO/removeMovementDTO';
import { editMovementDTO } from './movementsDTO/editMovementDTO';

@Controller('movements')
export class MovementsController {
  constructor(private readonly MovementsService: MovementsService) {}

  @Post('createMovement')
  async createMovement(@Body() dto: CreateMovementDTO) {
    return this.MovementsService.createMovement(dto);
  }

  @Post('deleteMovement')
  async removeMovements(@Body() dto: removeMovementDTO) {
    return this.MovementsService.removeMovements(dto);
  }

  @Patch('editMovement')
  async editMovementDTO(@Body() dto: editMovementDTO) {
    return this.MovementsService.editMovement(dto.movementName, dto);
  }
}
