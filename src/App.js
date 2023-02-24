import React from 'react'
import './styles/App.css'
import { useState, useEffect } from 'react'
import { Table } from './components/Table'
import { Form } from './components/Form'
let count = 8
const App = () => {
  const [employees, setEmployees] = useState([])
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    profession: '',
    color: '',
    city: '',
    branch: '',
    assigned: false,
  })

  useEffect(() => {
    const request = async () => {
      const apiUrl = 'http://localhost:8080/api/employees'
      const res = await fetch(apiUrl)
      const data = await res.json()
      console.log(data)
      setEmployees(data)
    }
    request()
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()

    // Will replace this with a post request
    const addNewEmployee = { ...newEmployee }
    addNewEmployee['id'] = count++
    addNewEmployee['code'] = 'F107'

    setEmployees((currentEmployees) => {
      return [...currentEmployees, addNewEmployee]
    })
    setNewEmployee({
      name: '',
      profession: '',
      color: '',
      city: '',
      branch: '',
      assigned: false,
    })
  }
  const handleDelete = (id) => {
    //todo: communicate with server about deleting by id.
    setEmployees((oldEmployees) => {
      return oldEmployees.filter((employee) => employee.id !== id)
    })
  }
  const handleFormChange = (e) => {
    e.preventDefault()
    const { target } = e
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    const updateNewEmployee = { ...newEmployee }
    updateNewEmployee[name] = value
    setNewEmployee(updateNewEmployee)
  }
  return (
    <div className='App'>
      <h1>Plexxis Employees</h1>

      <Table employees={employees} handleDelete={handleDelete}></Table>
      <Form
        newEmployee={newEmployee}
        handleFormChange={handleFormChange}
        handleSubmit={handleSubmit}
      ></Form>
    </div>
  )
}
export default App
