const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

//Get All Employees
router.get('/', async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

//Create new Employee
router.post('/', async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.status(201).json(employee);
});

// Login with email 
router.post('/login', async (req, res) => {
  const { email } = req.body;
  const user = await Employee.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user); 
});


module.exports = router;
