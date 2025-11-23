export const getDashboardStats = (req, res) => {
  // Static sample so students can replace with their own logic
  res.json({
    totalStudents: 200,
    totalFaculty: 20,
    activePlacements: 5,
    todaysLectures: 18,
  });
};
