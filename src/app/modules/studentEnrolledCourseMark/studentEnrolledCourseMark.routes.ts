import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { StudentEnrolledCourseMarkController } from './studentEnrolledCourseMark.controller';
import { StudentEnrolledCourseMarkValidation } from './studentEnrolledCourseMark.validations';

const router = express.Router();

router.get('/', StudentEnrolledCourseMarkController.getAllFromDB);
router.get('/my-marks', StudentEnrolledCourseMarkController.getStudentMarks);

router.post(
  '/update-marks',
  validateRequest(StudentEnrolledCourseMarkValidation.updateStudentMarks),
  StudentEnrolledCourseMarkController.updateMarks
);

router.post(
  '/update-course-final-marks',
  validateRequest(StudentEnrolledCourseMarkValidation.updateStudentCourseFinalMarks),
  StudentEnrolledCourseMarkController.updateCourseFinalMarks
);

export const StudentEnrolledCourseMarkRoutes = router;
