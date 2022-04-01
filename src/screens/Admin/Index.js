import { CBadge, CCard, CCardBody, CDataTable } from '@coreui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { url } from 'src/helpers/helpers';
import CustomModal from '../../components/CustomModal';
import {userContext} from '../../context/UserContext'

export default function Index() {
  const fields = ['#', 'admin_name', 'email_id', 'mobile_no', 'status', 'action'];
  const [list, setList] = React.useState([]);
  const [modal, setModal] = React.useState(false);
  const [id, setId] = React.useState('')
  const {user,setLoad} = React.useContext(userContext)

  async function fetchData() {
    const response = await fetch(url + 'v1/sharemarket/admin/all', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "created_by": "7905483801"
      })
    });

    if (response.ok === true) {
      const data = await response.json();
      console.log(data)
      if (data.status == "success") {
        let updated_list = [];
        let data_items = data.response.items;
        for (let i = 0; i < data_items.length; i++) {
          updated_list.push({
            admin_name: data_items[i].full_name,
            email_id: data_items[i].email_id,
            mobile_no: data_items[i].mobile,
            status: data_items[i].status
          })
        }

        setList(updated_list)
      }
    }
  }


  React.useEffect(() => {
    fetchData();
  }, [])

  const showModal = value => {
    setId(value);
    setModal(true)
  }

  const deleteEntry = () => {
    setLoad(true)
    async function deleteData(){
      const response = await fetch(url + 'v1/sharemarket/super-admin/admin/' + id,{
        method : "DELETE"
      });

      if (response.ok == true){
        const data = await response.json();
        if (data.status == "success"){
          setModal(false)
          fetchData()
        }else{
          toast.error(data.response.message)
        }
        
      }else{
        toast.error("Oops something went wrong!")
      }
    }
    deleteData()
  }
  return (
    <section>
       <CustomModal modal={modal} setModal={setModal} deleteEntry={deleteEntry} />
      <Link to="/create-admin" className='btn btn-primary mb-3'>
        Create Admin
      </Link>
      <CCard>
        <CCardBody>
          <CDataTable
            items={list}
            fields={fields}
            columnFilter
            tableFilter
            itemsPerPageSelect
            itemsPerPage={5}
            hover
            sorter
            pagination
            scopedSlots={{
              'status': (item) => (
                <td>
                  <CBadge color={item.status == "active" ? "danger" : "success"}>
                    {item.status}
                  </CBadge>
                </td>
              ),
              'action': (item) => (
                <td>
                  <Link to={`/edit/admin/${item.mobile_no}`}><i class="fa fa-pencil" aria-hidden="true"></i></Link>
                  <i style={{ cursor: "pointer" }} onClick={() => showModal(item.id)} class="fa fa-trash" aria-hidden="true"></i>
                </td>
              ),

              '#': (item, index) => (
                <td>
                  {index + 1}
                </td>
              )
            }
            }
          />
        </CCardBody>
      </CCard>
    </section>
  )
}
