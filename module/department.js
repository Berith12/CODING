import mongoose from 'mongoose';

const DepartmentSchema = new mongoose.Schema(
  {
    deptId: {
      type: String,
      required: [true, 'Department ID is required'],
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: [true, 'Department name is required'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    manager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee',
    },
  },
  {
    timestamps: true,
  }
);

export const Department = mongoose.model('Department', DepartmentSchema);