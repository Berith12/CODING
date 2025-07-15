import bcrypt from "bcryptjs";
import Employee  from "../module/employee.js";

export const createEmployee = async (req, res) =>{
    try {
        const { employee_name, age, position, department, salary} = req.body;
        console.log("i am here")
        if (
            employee_name == "" ||
            age == "" ||
            position == "" ||
            department == "" ||
            salary == ""
        ){
            return res.status(400).send("Please fill all the fields");
        }
        // const userExists = await Employee.findOne({ employee_name });
        // if (userExists){
        //     return res.status(400).json({ message: "Employee with this name already exists" });
        // }
        console.log("i am here 2")
        const newEmployee = new Employee({
            employee_name,
            age,
            position,
            department,
            salary
        });
        await newEmployee.save();

        return res.status(201).json({ message: "Employee created successfully", employee: newEmployee });
    } catch (error) {
        console.error("Error creating employee:", error);
        return res.status(500).json({ message: "Internal server error" ,error:error.message});
    }
};
export const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        return res.status(200).json({ message: "Employees fetched successfully", employees });
    } catch (error) {
        console.error("Error fetching employees:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
export const getEmployeebyId = async (req, res) =>{
    try {
        const {id} = req.parems.id;
        const employee = await Employee.findbyId(id);
        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        return res.status(200).json({ message: "Employee fetched successfully", employee });
    } catch (error) {
        console.error("Error fetching employee:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
export const updateEmployee = async (req, res ) => {
    try{
        const{id} = req.params;
        const update  = req.body;
        const employee = await Employee.findByIdAndUpdate(
            id,
            update,
            { new: true }
        );

        return res.status(200).json({ message: "Employee updated successfully", employee });
    } catch (error) {
        console.error("Error updating employee:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
export const deleteEmployee = async (req, res) =>{
    try {
        const {id} = req.params;
        const employee = await Employee.findByIdAndDelete(id);
        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        return res.status(200).json({ message: "Employee deleted successfully" });
    } catch (error) {
        console.error("Error deleting employee:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};