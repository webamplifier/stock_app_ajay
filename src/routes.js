import React from 'react';
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const AdminList = React.lazy(()=> import('./screens/Admin/Index'));
const CreateAdmin = React.lazy(()=>import('./screens/Admin/Create'));
const EditAdmin = React.lazy(()=>import('./screens/Admin/Edit'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/admin-list', name: 'Admin List', component: AdminList },
  { path: '/create-admin', name: 'Admin Create', component: CreateAdmin },
  { path: '/edit-admin/:mobileParams', name: 'Admin Edit', component: EditAdmin },
  

  
];

export default routes;
