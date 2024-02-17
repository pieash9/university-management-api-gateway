import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.get('/', AcademicSemesterController.getAllFromDB);
router.get('/:id', AcademicSemesterController.getByIdFromDB);
router.patch('/:id', AcademicSemesterController.updateOneIntoDB);
router.post('/', AcademicSemesterController.insertIntoDB);
router.delete('/:id', AcademicSemesterController.deleteByIdFromDB);

export const AcademicSemesterRoutes = router;
