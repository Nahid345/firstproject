import express from 'express';
import { StudentControllers } from './student.controller';
const router = express.Router();

// will call controller function

router.post('/create-student', StudentControllers.createStudent);

// get allstudent route

router.get('/', StudentControllers.getAllStudents);

//get a student
router.get('/:studentId', StudentControllers.getSingleStudent);

export const StudentRoutes = router;
