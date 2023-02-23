import React from 'react'
import { useState, useEffect } from 'react'

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
  return (
    <div className='App'>
      <h1>Plexxis Employees</h1>
      {employees.map((employee) => (
        <div key={employee.id}>
          {Object.keys(employee).map((key) => (
            <span key={key}>
              {key}:{employee[key]}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}
export default App
