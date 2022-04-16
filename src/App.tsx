import './App.css';
import { Dashboard } from '@components/Dashboard';
import { DashboardConfiguration } from './types/dashboard';
import { getDashboards } from '@api/dashboards';
import React from 'react';

function App() {
  const dashboards = getDashboards(); // TODO: useDashboardStorage, request on mount
  return (
    <>
      {dashboards.map((dashboard: DashboardConfiguration, idx: number) => (
        <Dashboard key={idx} configuration={dashboard} />
      ))}
    </>
  );
}

export default App;
