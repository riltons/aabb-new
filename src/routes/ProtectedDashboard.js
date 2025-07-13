import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';

function ProtectedDashboard() {
  const { user, loading } = useAuth();
  if (loading) return <div>Carregando...</div>;
  return user ? <DashboardPage /> : <Navigate to="/login" />;
}

export default ProtectedDashboard;
