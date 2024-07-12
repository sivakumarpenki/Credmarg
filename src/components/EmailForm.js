import React, { useState, useEffect } from 'react';

export default function EmailForm() {
  const [vendors, setVendors] = useState([]);
  const [selectedVendors, setSelectedVendors] = useState([]);
  const [statusMessages, setStatusMessages] = useState([]);

  useEffect(() => {
    const fetchVendors = async () => {
      const response = await fetch('http://localhost:8080/admin/vendors');
      const data = await response.json();
      setVendors(data);
    };

    fetchVendors();
  }, []);

  const handleSendEmails = async (e) => {
    e.preventDefault();
    setStatusMessages([]);
    try {
      const response = await fetch('http://localhost:8080/admin/sendEmails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedVendors),
      });

      if (!response.ok) {
        throw new Error('Failed to send emails.');
      }

      const messages = await response.json(); 
      setStatusMessages(messages);
      console.log(messages,"messages")
    } catch (error) {
      setStatusMessages([`An error occurred: ${error.message}`]);
    }
  };

  const handleVendorSelection = (vendor) => {
    setSelectedVendors((prevSelected) => {
      if (prevSelected.includes(vendor)) {
        return prevSelected.filter((v) => v !== vendor);
      } else {
        return [...prevSelected, vendor];
      }
    });
  };

  return (
    <form onSubmit={handleSendEmails}>
      <h2>Select Vendors to Send Email</h2>
      <ul>
        {vendors.map((vendor) => (
          <li key={vendor.email}>
            <label>
              <input
                type="checkbox"
                onChange={() => handleVendorSelection(vendor)}
              />
              {vendor.name} - {vendor.upi} - {vendor.email}
            </label>
          </li>
        ))}
      </ul>
      <button type="submit">Send Emails</button>
      {statusMessages.length > 0 && (
        <div>
          {statusMessages.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
      )}
    </form>
  );
}
