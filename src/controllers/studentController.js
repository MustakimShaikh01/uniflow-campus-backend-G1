import { students } from "../data/students.js";

export const getStudents = (req, res) => {
  res.json(students);
};

export const getStudentById = (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.json(student);
};

export const createStudent = (req, res) => {
  const { name, rollNo, department, year } = req.body;
  const newStudent = {
    id: students.length + 1,
    name,
    rollNo,
    department,
    year,
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
};
