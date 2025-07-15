

import { Department } from '../models/department.js';

export const createDepartment = async (req, res) => {
  try {
    const { name, description, manager } = req.body;
    if (!name) {
      return res.status(400).json({ message: 'Please fill the name field' });
    }

    const alreadyExists = await Department.findOne({ name });
    if (alreadyExists) {
      return res.status(400).json({ message: 'Department with this name already exists' });
    }

    const newDepartment = new Department({
      deptId: `DEPT${Date.now()}`,
      name,
      description,
      manager,
    });

    await newDepartment.save();

    res.status(201).json({
      message: 'Department created successfully',
      department: newDepartment,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};

export const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find().populate('manager');
    res.status(200).json({
      message: 'Departments fetched successfully',
      departments,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.message,
    });
  }
};