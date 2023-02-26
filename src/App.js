import React from 'react'
import './styles/App.css'
import { useState, useEffect } from 'react'
import { Table } from './components/Table'
import { Form } from './components/Form'
import { Modal } from './components/Modal'

const handleFormChange = (e, updateEmployee, setUpdateEmployee) => {
  const { target } = e
  const name = target.name
  const value = target.type === 'checkbox' ? target.checked : target.value

  const updateNewEmployee = { ...updateEmployee, [name]: value }
  setUpdateEmployee(updateNewEmployee)
}

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
  const [editEmployee, setEditEmployee] = useState({
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
      setEmployees(data)
    }
    request()
  }, [])
  const handleAddSubmit = async (e, id) => {
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
  const handleEditSubmit = async (e, id) => {
    e.preventDefault()
    const res = await fetch(`${apiUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editEmployee),
    })
    const editedEmployee = await res.json()
    const index = employees.findIndex((employee) => employee.id === id)
    const editedEmployees = employees
    editedEmployees[index] = editedEmployee

    setEmployees(editedEmployees)
    setEditEmployee({
      name: '',
      profession: '',
      color: '',
      city: '',
      branch: '',
      assigned: false,
    })
    document.getElementById('modal').close()
  }
  const handleDelete = async (id) => {
    await fetch(`${apiUrl}/${id}`, { method: 'DELETE' })
    setEmployees((oldEmployees) => {
      return oldEmployees.filter((employee) => employee.id !== id)
    })
  }
  const handleEdit = (id) => {
    const tempEmployee = employees.find((employee) => employee.id === id)
    setEditEmployee(tempEmployee)
    document.getElementById('modal').showModal()
  }
  return (
    <div className='App'>
      <h1>Plexxis Employees</h1>

      <Table
        employees={employees}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      ></Table>
      <h2>Add a new employee</h2>
      <Form
        employee={newEmployee}
        setEmployee={setNewEmployee}
        handleFormChange={handleFormChange}
        handleSubmit={handleAddSubmit}
      ></Form>
      <Modal>
        <Form
          employee={editEmployee}
          setEmployee={setEditEmployee}
          handleFormChange={handleFormChange}
          handleSubmit={handleEditSubmit}
        ></Form>
      </Modal>
    </div>
  )
}
export default App
