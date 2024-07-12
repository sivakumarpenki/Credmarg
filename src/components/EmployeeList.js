import React from 'react';

export default function EmployeeList({ employees }) {

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Employees List</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <table border="1" style={{ borderCollapse: 'collapse', width: '80%' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>CTC</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.email}>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
                <td>{employee.ctc}</td>
                <td>{employee.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
