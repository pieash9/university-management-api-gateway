import { z } from 'zod';
import {
  AcademicSemesterCodes,
  AcademicSemesterTitles,
  academicSemesterMonths
} from './academicSemester.constants';

const create = z.object({
  body: z.object({
    year: z.number({ required_error: 'Year is required.' }),
    title: z.enum([...AcademicSemesterTitles] as [string, ...string[]], {
      required_error: 'Title is required.'
    }),
    code: z.enum([...AcademicSemesterCodes] as [string, ...string[]], {
      required_error: 'Code is required.'
    }),
    startMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'Start Month is required.'
    }),
    endMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'End Month is required.'
    })
  })
});

const update = z.object({
  body: z.object({
    title: z.enum([...AcademicSemesterTitles] as [string, ...string[]]).optional(),
    code: z.enum([...AcademicSemesterCodes] as [string, ...string[]]).optional(),
    year: z.number().optional(),
    startMonth: z.enum([...academicSemesterMonths] as [string, ...string[]]).optional(),
    endMonth: z.enum([...academicSemesterMonths] as [string, ...string[]]).optional()
  })
});

export const AcademicSemesterValidation = { create, update };
