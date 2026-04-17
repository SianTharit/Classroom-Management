import {Subject} from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: 'CS101',
        name: 'Introduction to Computer Science',
        department: 'CS',
        description: 'A foundational course covering basic programming principles and problem-solving techniques.',
        createdAt: new Date().toISOString(),
    },
    {
        id: 2,
        code: 'MATH201',
        name: 'Calculus II',
        department: 'Math',
        description: 'Advanced study of integral calculus, sequences, and series.',
        createdAt: new Date().toISOString(),
    },
    {
        id: 3,
        code: 'ENG102',
        name: 'Academic Writing',
        department: 'English',
        description: 'Developing critical reading and writing skills for academic success.',
        createdAt: new Date().toISOString(),
    },
];
