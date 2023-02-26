import React from 'react'
import './styles/App.css'
import { useState, useEffect } from 'react'
import { Table } from './components/Table'
import { Form } from './components/Form'

const App = () => {
  const apiUrl = 'http://localhost:8080/api/employees'
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
      const res = await fetch(apiUrl)
      const data = await res.json()
      console.log(data)
      setEmployees(data)
    }
    request()
  }, [])
  const handleAddSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEmployee),
    })
    const addNewEmployee = await res.json()

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
  const handleDelete = async (id) => {
    await fetch(`${apiUrl}/${id}`, { method: 'DELETE' })
    setEmployees((oldEmployees) => {
      return oldEmployees.filter((employee) => employee.id !== id)
    })
  }
  const handleFormChange = (e) => {
    e.preventDefault()
    const { target } = e
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    const updateNewEmployee = { ...newEmployee, [name]: value }

    setNewEmployee(updateNewEmployee)
  }
  return (
    <div className='App'>
      <h1>Plexxis Employees</h1>

      <Table employees={employees} handleDelete={handleDelete}></Table>
      <h2>Add a new employee</h2>
      <Form
        newEmployee={newEmployee}
        handleFormChange={handleFormChange}
        handleAddSubmit={handleAddSubmit}
      ></Form>
    </div>
  )
}
export default App
