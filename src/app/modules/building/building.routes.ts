import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BuildingController } from './building.controller';
import { BuildingValidation } from './building.validation';

const router = express.Router();

router.get('/', BuildingController.getAllFromDB);
router.get('/:id', BuildingController.getByIdFromDB);

router.post('/', validateRequest(BuildingValidation.create), BuildingController.insertIntoDB);

router.patch('/:id', validateRequest(BuildingValidation.update), BuildingController.updateOneInDB);

router.delete('/:id', BuildingController.deleteByIdFromDB);

export const BuildingRoutes = router;
