import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { url } from 'src/helpers/helpers'
import {userContext} from '../../../context/UserContext'
import {toast,ToastContainer} from 'react-toastify'

const Login = () => {
  const [email,setEmail] = React.useState('');
  const [password,setPassword] = React.useState('');
  const {setUser,setLoad} = React.useContext(userContext);

  const handleSubmit = e =>{
    setLoad(true)
    e.preventDefault();

    async function loginData(){
      const formData = new FormData();
      formData.append('email',email);
      formData.append('password',password);
      const response = await fetch(url + 'login',{
        method : 'POST',
        body : formData
      })

      if (response.ok === true){
        const data = await response.json();
        setLoad(false)
        if (data.status === 200){
          setUser(data.user_data)
          window.location = window.location.origin + '/'
        }else{
          toast.error(data.message)
        }
      }
    }
    loginData();
  }


  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <ToastContainer />
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={e=>handleSubmit(e)}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="email" required placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} autoComplete="email" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} autoComplete="current-password" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton type='submit' color="primary" className="px-4">Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
