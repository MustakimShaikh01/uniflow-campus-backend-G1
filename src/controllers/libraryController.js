import { books } from "../data/library.js";

export const getBooks = (req, res) => {
  res.json(books);
};
