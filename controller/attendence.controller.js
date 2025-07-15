import { Attendance } from '../models/attendance.js';

export const createAttendance = async (req, res) => {
  try {
    const { employee, checkIn, checkOut, status, notes } = req.body;
    if (!employee || !checkIn) {
      return res.status(400).json({ message: 'Please fill employee and check-in fields' });
    }

    const newAttendance = new Attendance({
      attId: `ATT${Date.now()}`,
      employee,
      checkIn,
      checkOut,
      status,
      notes,
    });

    await newAttendance.save();

    res.status(201).json({
      message: 'Attendance recorded successfully',
      attendance: newAttendance,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

export const getAllAttendances = async (req, res) => {
  try {
    const attendances = await Attendance.find().populate('employee');
    res.status(200).json({
      message: 'Attendances fetched successfully',
      attendances,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};