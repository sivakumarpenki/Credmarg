import React, { useEffect, useState } from 'react';
import VendorForm from '../components/VendorForm';
import VendorList from '../components/VendorList';

export default function Vendors() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    const response = await fetch('http://localhost:8080/admin/vendors');
    const data = await response.json();
    setVendors(data);
  };

  const addVendors = async (vendor) => {
    const response = await fetch('http://localhost:8080/admin/vendor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vendor),
    });

    if (response.ok) {
      fetchVendors();
    } else {
      console.error('Failed to add vendor');
    }
  };

  return (
    <div>
      <h1>Vendors List</h1>
      <VendorForm addVendors={addVendors} />
      <VendorList vendors={vendors} />
    </div>
  );
}
