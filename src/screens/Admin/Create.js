import React from 'react'
import { toast } from 'react-toastify';
import { url } from 'src/helpers/helpers';
import { userContext } from '../../context/UserContext'

export default function Create() {
  const { user, setLoad } = React.useContext(userContext);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const handleSubmit = e => {
    e.preventDefault();

    async function submit(){
      const response = await fetch(url + 'v1/sharemarket/super-admin/admin',{
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
          "full_name" : name,
          "email_id" : email,
          "mobile" : mobile,
          "created_by" : "7905483801"
        })
      });

      if (response.ok == true){
        const data = await response.json();
        if (data.status == "success"){
          toast.success(data.response.message)
        }else{
          toast.success(data.response.message)
        }
      }else{
        toast.error("Oops something went wrong!")
      }
    }

    submit();
  }
  return (
    <div className="container create-page-main-section">
      <form onSubmit={e => handleSubmit(e)}>
        <div className='p-sm-5 create-form-field'>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Name:<span className='required-label'>*</span></label>
            <div class="d-flex align-items-sm-center col-sm-10">
              <input required value={name} onChange={e => setName(e.target.value)} type="text" class="form-control" id="inputPassword" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Email:<span className='required-label'>*</span></label>
            <div class="d-flex align-items-sm-center col-sm-10">
              <input required value={email} type="text" onChange={e => setEmail(e.target.value)} class="form-control" id="inputPassword" />
            </div>
          </div>

          <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Mobile:<span className='required-label'>*</span></label>
            <div class="d-flex align-items-sm-center col-sm-10">
              <input required value={mobile} type="text" onChange={e => setMobile(e.target.value)} class="form-control" id="inputPassword" />
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center create-catagory-btns">
          <button onClick={() => window.location.reload()} type="submit" class="font-weight-bold m-3 py-2 px-4 btn btn-danger">Cancel<i
            class="px-2 fa fa-times" aria-hidden="true"></i></button>
          <button type="submit" class="font-weight-bold m-3 py-2 px-4 btn btn-success">Save<i
            class="px-2 fa fa-floppy-o" aria-hidden="true"></i></button>
        </div>
      </form>
    </div>
  )
}
