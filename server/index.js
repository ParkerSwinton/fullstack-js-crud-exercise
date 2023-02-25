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
  const id = req.params.id
  const foundEmployee = employees.find((employee) => employee.id === Number(id))

  if (foundEmployee) {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send(JSON.stringify(foundEmployee, null, 2))
  } else {
    res.status(404).send()
  }
})

//todo error handling
app.post('/api/employees', (req, res, next) => {
  const newEmployee = req.body
  newEmployee['code'] = 'F' + String(availableID + 99)
  newEmployee['id'] = availableID++

  employees.push(newEmployee)
  res.setHeader('Content-Type', 'application/json')
  res.status(201).send(JSON.stringify(newEmployee, null, 2))
})
//todo bad input
app.put('/api/employees/:id', (req, res, next) => {
  const body = req.body
  const id = req.params.id
  const employeeIndex = employees.findIndex(
    (employee) => employee.id === Number(id)
  )
  if (employeeIndex === -1) {
    res.status(404).send()
  } else {
    Object.assign(employees[employeeIndex], body)
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send(JSON.stringify(employees[employeeIndex], null, 2))
  }
})
//todo app.delete /api/employees/:id
app.delete('/api/employees/:id', (req, res, next) => {
  const id = req.params.id
  const employeeIndex = employees.findIndex(
    (employee) => employee.id === Number(id)
  )

  if (employeeIndex === -1) {
    res.status(404).send()
  } else {
    employees.splice(employeeIndex, 1)
    res.setHeader('Content-Type', 'application/json')
    res.status(204).send()
  }
})

app.listen(PORT, () => console.log(`Job Dispatch API running on port ${PORT}!`))
