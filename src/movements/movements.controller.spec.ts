import { Test, TestingModule } from '@nestjs/testing';
import { MovementsController } from './movements.controller';
import { MovementsService } from './movements.service';

describe('MovementsController', () => {
  let controller: MovementsController;
  let service: {
    editMovement: jest.Mock;
    createMovement: jest.Mock;
    removeMovements: jest.Mock;
  };

  beforeEach(async () => {
    service = {
      editMovement: jest.fn(),
      createMovement: jest.fn(),
      removeMovements: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovementsController],
      providers: [{ provide: MovementsService, useValue: service }],
    }).compile();

    controller = module.get<MovementsController>(MovementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should forward the edit body to the service using the movement name', async () => {
    service.editMovement.mockResolvedValue({ success: true });

    await controller.editMovementDTO(
      {
        movementName: 'Ocio',
        description: 'Updated description',
      },
      {},
    );

    expect(service.editMovement).toHaveBeenCalledWith(
      'Ocio',
      expect.objectContaining({ description: 'Updated description' }),
    );
  });
});
