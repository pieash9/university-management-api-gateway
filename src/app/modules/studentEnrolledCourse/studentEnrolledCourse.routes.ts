import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';

import { StudentEnrolledCourseValidation } from './studentEnrolledCourse.validation';
import { StudentEnrolledCourseController } from './studentEnrolledCourse.controller';

const router = express.Router();

router.get('/', StudentEnrolledCourseController.getAllFromDB);
router.get('/:id', StudentEnrolledCourseController.getByIdFromDB);

router.post(
  '/',
  validateRequest(StudentEnrolledCourseValidation.create),
  StudentEnrolledCourseController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(StudentEnrolledCourseValidation.update),
  StudentEnrolledCourseController.updateOneInDB
);

router.delete('/:id', StudentEnrolledCourseController.deleteByIdFromDB);

export const StudentEnrolledCourseRoutes = router;
