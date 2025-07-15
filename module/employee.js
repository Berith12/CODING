import mongoose, { mongo } from "mongoose";

const employeeSchema = new mongoose.Schema({
  employee_name: { type: String, required: true },
  age: { type: Number, required: true },
  position: { type: String, required: true, enum: ["Manager", "Team Lead", "Developer", "Designer"] },
  department: { type: String, required: true, enum: ["HR", "IT", "Finance", "Sales"] },
  salary: { type: Number, required: true },
  role: {type: String, required: true, enum: ["Admin", "User"], default: "User"},
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
