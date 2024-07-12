import React, { useState } from 'react';

export default function VendorForm({ addVendors }) {
  const [name, setName] = useState('');
  const [upi, setUpi] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const vendor = { name, upi, email };
    await addVendors(vendor);
    setName('');
    setEmail('');
    setUpi('');
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
        value={upi}
        onChange={(e) => setUpi(e.target.value)}
        placeholder="UPI"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <button type="submit">Add Vendor</button>
    </form>
  );
}
