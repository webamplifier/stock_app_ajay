import { CModal, CModalBody, CModalHeader } from '@coreui/react'
import React from 'react';
import { url } from 'src/helpers/helpers';
import { userContext } from '../context/UserContext'

export default function CustomerModal(props) {
    const { user, setLoad } = React.useContext(userContext);
    const { customermodal, setCustomerModal, allCustomers, setAllCustomers, setCurrentCustomer } = props;
    const [name, setName] = React.useState('');
    const [gst,setGST] = React.useState('');
    const [due_amount, setDueAmount] = React.useState(0);
    const [mobile,setMobile] = React.useState('');
    const [address, setAddress] = React.useState(''); 
    const [email, setEmail] = React.useState('');
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        setLoad(true);
        async function submitData() {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('mobile', mobile);
            formData.append('address', address);
            formData.append('gst', gst);
            formData.append('due_amount',due_amount);
    
            const response = await fetch(url + 'createcustomer', {
                method: 'POST',
                headers: {
                    'Authorization': user?.token
                },
                body: formData
            })

            if (response.ok === true) {
                const data = await response.json();
                setLoad(false);
                if (data.status === 200) {
                    let customers=[];
                    if(data.customer){
                    customers.push(...allCustomers,data.customer);
                    setAllCustomers(customers);
                    setCurrentCustomer(data.customer);
                    }
                    setName('');
                    setEmail('');
                    setMobile('');
                    setAddress('');
                    setGST('');
                    setDueAmount(0);
                } else {
                    console.log(data.message);
                }
            }
        }
        submitData();
        setCustomerModal(false);
    }

    return (
        <div className='container full-size-create-page-main-section'>
            <CModal
                show={customermodal}
                onClose={setCustomerModal}
            >
                <CModalHeader closeButton>
                    Create Customer
                </CModalHeader>
                <CModalBody className="delete-modal-box">
                        <div className="container">
                            <div className="form-group row">
                                <div className="col-3">
                                <label htmlFor="" className="text-center">Name<span className='required-label'>*</span></label>
                                </div>
                                <div className="col-6">
                                <input type="text" value={name} onChange={e => setName(e.target.value)} className='form-control' />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-3">
                                <label htmlFor="">Email</label>
                                </div>
                                <div className="col-6">
                                <input type="text" value={email} onChange={e => setEmail(e.target.value)} className='form-control' />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-3">
                                <label htmlFor="">Mobile<span className='required-label'>*</span></label>
                                </div>
                                <div className="col-6">
                                <input type="text" value={mobile} onChange={e => setMobile(e.target.value)} className='form-control' />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-3">
                                <label htmlFor="">Due_Amount</label>
                                </div>
                                <div className="col-6">
                                <input type="text" value={due_amount} onChange={e => setDueAmount(e.target.value)} className='form-control' />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-3">
                                <label htmlFor="">GST</label>
                                </div>
                                <div className="col-6">
                                <input type="text" value={gst} onChange={e => setGST(e.target.value)} className='form-control' />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-3">
                                <label htmlFor="">Address</label>
                                </div>
                                <div className="col-6">
                                <input type="text" value={address} onChange={e => setAddress(e.target.value)} className='form-control' />
                                </div>
                            </div>
                    </div>
                    <button type='submit' onClick={(e) => handleSubmit(e)} className='col-12 btn btn-secondary'>Submit</button>
                </CModalBody>
            </CModal>
        </div>

    )
}
