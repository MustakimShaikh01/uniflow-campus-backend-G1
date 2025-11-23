import { exams } from "../data/exams.js";

export const getExams = (req, res) => {
  res.json(exams);
};
