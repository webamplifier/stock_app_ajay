import React from 'react'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {userContext} from '../context/UserContext'
import { url } from 'src/helpers/helpers'
import { toast } from 'react-toastify'

const TheHeaderDropdown = () => {
  const {setUser,user} = React.useContext(userContext);
  const logout = () => {
    setUser(null);
    return window.location = window.location.origin + '/#/login'
  }

  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={'avatars/6.jpg'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Settings</strong>
        </CDropdownItem>
        <CDropdownItem onClick={async ()=>{
          const res = window.prompt("Enter New Password");
          if (res.length > 0){
            const formData = new FormData();
            formData.append("password",res);
            const response = await fetch(url + 'update-user-password',{
              method : "POST",
              headers : {
                "Authorization" : user?.token
              },
              body : formData
            });

            if (response.ok === true){
              const data = await response.json();
              if (data.status == 200){
                toast.success(data.message)
              }else{
                toast.error(data.message)
              }
            }
          }else{
            // 
          }
        }}>
          <CIcon name="cil-user" className="mfe-2" />Change Password
        </CDropdownItem>
        <CDropdownItem onClick={()=>logout()}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
