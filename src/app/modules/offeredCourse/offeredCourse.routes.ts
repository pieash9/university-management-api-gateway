import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { OfferedCourseController } from './offeredCourse.controller';
import { OfferedCourseValidation } from './offeredCourse.validation';

const router = express.Router();

router.get('/', OfferedCourseController.getAllFromDB);
router.get('/:id', OfferedCourseController.getByIdFromDB);

router.post(
  '/',
  validateRequest(OfferedCourseValidation.create),
  OfferedCourseController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(OfferedCourseValidation.update),
  OfferedCourseController.updateOneInDB
);

router.delete('/:id', OfferedCourseController.deleteByIdFromDB);

export const OfferedCourseRoutes = router;
