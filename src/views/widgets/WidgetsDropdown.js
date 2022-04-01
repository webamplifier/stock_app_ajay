import React from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import { userContext } from '../../context/UserContext';
import { url } from 'src/helpers/helpers';
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'

const WidgetsDropdown = () => {
  
  const { user,setLoad } = React.useContext(userContext);
  const [customer_count,setCustomerCount] = React.useState(0);
  const [party_count, setPartyCount] = React.useState(0);
  const [category_count, setCategoryCount] = React.useState(0);
  const [product_count, setProductCount] = React.useState(0);
  
  React.useEffect(()=>{
    async function fetchData() {
      setLoad(true);
      const response = await fetch(url + 'fetchTotalCount', {
          method: 'GET',
          headers: {
              'Authorization': user?.token
          }
      })

      if (response.ok === true) {
          const data = await response.json();
          setLoad(false);
          if (data.status === 200) {
              setCustomerCount(data.customer_count);
              setPartyCount(data.party_count);
              setCategoryCount(data.category_count);
              setProductCount(data.product_count);
          } else {
              alert(data.message);
          }
      }
  }
  fetchData();
  },[])

  return (
    <CRow>
      <CCol sm="6" lg="6">
        <CWidgetDropdown
          color="primary"
          header="Customers"
          style={{paddingBottom : 30}}
          text= {customer_count.toString()}
        >
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="6">
        <CWidgetDropdown
          color="info"
          header="Products"
          style={{paddingBottom : 30}}
          text={product_count.toString()}
        >
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="6">
        <CWidgetDropdown
          color="warning"
          header="Parties"
          style={{paddingBottom : 30}}
          text={party_count.toString()}
        >
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="6">
        <CWidgetDropdown
          color="gradient-primary"
          header="Categories"
          style={{paddingBottom : 30}}
          text={category_count.toString()}
        >
        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
