import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { OfferedCourseClassScheduleValidation } from './offeredCourseClassSchedule.validation';
import { OfferedCourseClassScheduleController } from './offeredCourseClassSchedule.controller';

const router = express.Router();

router.get('/', OfferedCourseClassScheduleController.getAllFromDB);
router.get('/:id', OfferedCourseClassScheduleController.getByIdFromDB);

router.post(
  '/',
  // validateRequest(OfferedCourseClassScheduleValidation.create),
  OfferedCourseClassScheduleController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(OfferedCourseClassScheduleValidation.update),
  OfferedCourseClassScheduleController.updateOneInDB
);

router.delete('/:id', OfferedCourseClassScheduleController.deleteByIdFromDB);

export const OfferedCourseClassScheduleRoutes = router;
