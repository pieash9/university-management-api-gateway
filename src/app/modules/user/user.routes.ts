import express, { NextFunction, Request, Response } from 'express';
import { UserController } from './user.controller';
import { FileUploadHelper } from '../../../helpers/fileUplaodHelper';
import { UserValidation } from './user.validations';

const router = express.Router();

router.post(
  '/create-student',
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = UserValidation.createStudent.parse(JSON.parse(req.body.data));
    return UserController.createStudent(req, res, next);
  }
);

export const UserRoutes = router;
