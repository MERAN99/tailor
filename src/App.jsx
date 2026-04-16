import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './layout/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import SearchCustomers from './pages/SearchCustomers';
import AddCustomer from './pages/AddCustomer';
import CustomerDetails from './pages/CustomerDetails';
import MeasuredMinimal from './pages/MeasuredMinimal';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes (No Layout) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes (With Layout) */}
        <Route path="/" element={<AppLayout><Dashboard /></AppLayout>} />
        <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
        <Route path="/search" element={<AppLayout><SearchCustomers /></AppLayout>} />
        <Route path="/add-customer" element={<AppLayout><AddCustomer /></AppLayout>} />
        <Route path="/customer/:id" element={<AppLayout><CustomerDetails /></AppLayout>} />
        <Route path="/measurements" element={<AppLayout><MeasuredMinimal /></AppLayout>} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
