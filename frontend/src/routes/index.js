import { lazy } from 'react';

const Dashboard = lazy(() => import('../pages/Dashboard'));

export const routes = [
  {
    path: '/',
    element: Dashboard,
    title: 'Dashboard',
  },
];

export default routes; 