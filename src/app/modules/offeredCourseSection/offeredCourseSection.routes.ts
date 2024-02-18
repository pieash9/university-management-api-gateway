import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { OfferedCourseSectionController } from './offeredCourseSection.controller';
import { OfferedCourseSectionValidation } from './offeredCourseSection.validation';

const router = express.Router();

router.get('/', OfferedCourseSectionController.getAllFromDB);
router.get('/:id', OfferedCourseSectionController.getByIdFromDB);

router.post(
  '/',
  validateRequest(OfferedCourseSectionValidation.create),

  OfferedCourseSectionController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(OfferedCourseSectionValidation.update),

  OfferedCourseSectionController.updateOneInDB
);

router.delete(
  '/:id',

  OfferedCourseSectionController.deleteByIdFromDB
);

export const OfferedCourseSectionRoutes = router;
