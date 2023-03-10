const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const employees = require('./data/employees.json')

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}
const PORT = 8080
let availableID = 8

app.use(cors(corsOptions))
app.use(morgan('tiny'))
app.use(bodyParser.json())

app.get('/api/employees', (req, res, next) => {
  res.setHeader('Content-Type', 'application/json')
  res.status(200).send(JSON.stringify(employees, null, 2))
})

app.get('/api/employees/:id', (req, res, next) => {
  const id = parseInt(req.params.id)
  const foundEmployee = employees.find((employee) => employee.id === id)

  if (foundEmployee) {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send(JSON.stringify(foundEmployee, null, 2))
  } else {
    res.status(404).send()
  }
})

// Check that the POST request has exactly the necessary fields required.
const validatePost = (employee) => {
  const keys = Object.keys(employee)
  const fields = ['name', 'profession', 'color', 'city', 'branch', 'assigned']
  if (keys.length !== fields.length) return false

  for (const key of keys) {
    if (!fields.includes(key)) return false
  }
  return true
}

app.post('/api/employees', (req, res, next) => {
  const newEmployee = req.body
  if (!validatePost(newEmployee)) {
    res.status(400).send()
  } else {
    newEmployee.code = `F${availableID + 99}`
    newEmployee.id = availableID++

    employees.push(newEmployee)
    res.setHeader('Content-Type', 'application/json')
    res.status(201).send(JSON.stringify(newEmployee, null, 2))
  }
})

app.put('/api/employees/:id', (req, res, next) => {
  const body = req.body
  const id = parseInt(req.params.id)
  const employeeIndex = employees.findIndex((employee) => employee.id === id)

  // Verifies the id exists and isn't being modified.
  if (employeeIndex === -1) {
    res.status(404).send()
  } else if (employees[employeeIndex].id !== body.id) {
    res.status(400).send()
  } else {
    employees[employeeIndex] = { ...employees[employeeIndex], ...body }
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send(JSON.stringify(employees[employeeIndex], null, 2))
  }
})

app.delete('/api/employees/:id', (req, res, next) => {
  const id = parseInt(req.params.id)
  const employeeIndex = employees.findIndex((employee) => employee.id === id)

  if (employeeIndex === -1) {
    res.status(404).send()
  } else {
    employees.splice(employeeIndex, 1)
    res.setHeader('Content-Type', 'application/json')
    res.status(204).send()
  }
})

app.listen(PORT, () => console.log(`Job Dispatch API running on port ${PORT}!`))
