import express from "express";
const router = express.Router();


import { getAllEmployees, getEmployeebyId, updateEmployee, deleteEmployee, createEmployee } from "../controller/employee.controller.js";
router.post('/',createEmployee)
router.get("/employee", getAllEmployees);
router.get("/:id", getEmployeebyId);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee); 
export default router;