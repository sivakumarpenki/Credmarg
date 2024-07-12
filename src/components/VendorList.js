import React from 'react';

export default function VendorList({ vendors }) {
    console.log(vendors,"vendors")

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Vendors</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <table border="1" style={{ borderCollapse: 'collapse', width: '80%' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>UPI</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor) => (
              <tr key={vendor.email}>
                <td>{vendor.name}</td>
                <td>{vendor.upi}</td>
                <td>{vendor.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
