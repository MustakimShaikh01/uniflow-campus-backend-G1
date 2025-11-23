import { placements } from "../data/placements.js";

export const getPlacements = (req, res) => {
  res.json(placements);
};
