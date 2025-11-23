import { attendanceRecords } from "../data/attendance.js";

export const getAttendance = (req, res) => {
  res.json(attendanceRecords);
};

export const markAttendance = (req, res) => {
  const { studentId, date, status } = req.body;
  const newRecord = {
    id: attendanceRecords.length + 1,
    studentId,
    date,
    status,
  };
  attendanceRecords.push(newRecord);
  res.status(201).json(newRecord);
};
