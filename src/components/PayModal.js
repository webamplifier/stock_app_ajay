import { CButton, CModal, CModalBody, CModalFooter, CModalHeader } from '@coreui/react'
import React from 'react'
import Select from 'react-select';
import { url } from 'src/helpers/helpers';
import { userContext } from '../context/UserContext'

export default function PayModal(props) {
    const { user,setLoad } = React.useContext(userContext);
    const { paymodal, setPayModal, payBill, payAmount, setPayAmount, paymentMode, setPaymentMode } = props;
    const [allPaymentMethods, setAllPaymentMethods] = React.useState([]);
    
    React.useEffect(()=>{
        async function fetchPaymentMethods() {
            setLoad(true);
            const response = await fetch(url + 'getPaymentMethods', {
                method: 'GET',
                headers: {
                    'Authorization': user?.token
                }
            })
            const data = await response.json();
            setLoad(false);
            setAllPaymentMethods(data?.payment_methods.map(item => {
                return {
                    label: item
                }
            }))
            setPaymentMode({
                label: "cash"
            });
        }
        fetchPaymentMethods(); 
    },[]);

    return (
        
        <div className='delete_modal_box'>
            <CModal
                show={paymodal}
                onClose={setPayModal} 
            >
                <CModalHeader closeButton>
                    Pay Bill
                </CModalHeader>
                <CModalBody className='delete_modal_body'>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="">Paid Amount</label>
                                <input type="text" value={payAmount} onChange={e => setPayAmount(e.target.value)} className='form-control' />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="">Payment Method</label>
                                <Select options={allPaymentMethods} value={paymentMode} onChange={setPaymentMode}/>
                            </div>
                        </div>
                    </div>
                    <button type='submit' onClick={()=>payBill()} className='col-12 btn btn-secondary mb-5'>Submit</button>
                </CModalBody>
            </CModal>
        </div>
    
    )
}
