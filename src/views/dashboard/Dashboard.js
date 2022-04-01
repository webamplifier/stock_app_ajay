import { CChartDoughnut } from '@coreui/react-chartjs';
import React, { lazy } from 'react';
import ChartBarSimple from '../charts/ChartBarSimple.js';
import { userContext } from '../../context/UserContext';
import { url } from 'src/helpers/helpers';

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))

const Dashboard = () => {
  const { user,setLoad } = React.useContext(userContext);
  
  return (
    <>
      
    </>
  )
}

export default Dashboard
