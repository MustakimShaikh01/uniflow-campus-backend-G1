import { faculty } from "../data/faculty.js";

export const getFaculty = (req, res) => {
  res.json(faculty);
};
