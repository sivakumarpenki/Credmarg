// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li><Link to="/employees">Employees</Link></li>
        <li><Link to="/vendors">Vendors</Link></li>
        <li><Link to="/send-emails">Send Emails</Link></li>
      </ul>
    </div>
  );
}

export default Home;
