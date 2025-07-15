import { LeaveRequest } from '../models/leaveRequest.js';

export const createLeaveRequest = async (req, res) => {
  try {
    const { employee, startDate, endDate, reason } = req.body;
    if (!employee || !startDate || !endDate || !reason) {
      return res.status(400).json({ message: 'Please fill all required fields' });
    }

    const newLeaveRequest = new LeaveRequest({
      reqId: `LR${Date.now()}`,
      employee,
      startDate,
      endDate,
      reason,
    });

    await newLeaveRequest.save();

    res.status(201).json({
      message: 'Leave request created successfully',
      leaveRequest: newLeaveRequest,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

export const getAllLeaveRequests = async (req, res) => {
  try {
    const leaveRequests = await LeaveRequest.find().populate('employee approvedBy');
    res.status(200).json({
      message: 'Leave requests fetched successfully',
      leaveRequests,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};