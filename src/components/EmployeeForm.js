import React, { useState } from 'react';

export default function EmployeeForm({ addEmployee }) {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [ctc, setCtc] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/admin/employe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, designation, ctc, email }),
    });
    const data = await response.json();
    addEmployee(data);
    setName('');
    setDesignation('');
    setCtc('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="text"
        value={designation}
        onChange={(e) => setDesignation(e.target.value)}
        placeholder="Designation"
        required
      />
      <input
        type="number"
        value={ctc}
        onChange={(e) => setCtc(e.target.value)}
        placeholder="CTC"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <button type="submit">Add Employee</button>
    </form>
  );
}
