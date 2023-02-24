import React from 'react'
import './styles/App.css'
import { useState, useEffect } from 'react'
import { Table } from './components/Table'

const App = () => {
  const [employees, setEmployees] = useState([])

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
  const handleDelete = (id) => {
    //todo: communicate with server about deleting by id.
    setEmployees((oldEmployees) => {
      return oldEmployees.filter((employee) => employee.id !== id)
    })
  }
  return (
    <div className='App'>
      <h1>Plexxis Employees</h1>

      <Table employees={employees} handleDelete={handleDelete}></Table>

      <form></form>
    </div>
  )
}
export default App
