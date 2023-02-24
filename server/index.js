const express = require('express')
const cors = require('cors')
const app = express()
const employees = require('./data/employees.json')

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}
const PORT = 8080

app.get('/api/employees', cors(corsOptions), (req, res, next) => {
  console.log('/api/employees')
  res.setHeader('Content-Type', 'application/json')
  res.status(200)
  res.send(JSON.stringify(employees, null, 2))
})
//todo app.get /api/employees/:id
//todo app.post /api/employees
//todo app.put /api/employees/:id
//todo app.delete /api/employees/:id
app.listen(PORT, () => console.log(`Job Dispatch API running on port ${PORT}!`))
