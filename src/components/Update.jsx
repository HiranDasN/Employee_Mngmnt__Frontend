import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { updateAnEmpDetails } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Update({ display,setdepartmentStatus }) {


    console.log(display);
    const { id } = display
    console.log(id);


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [category, setCategory] = useState('');
    console.log(category);

    const handleAddCategory = async () => {

        if (!category) {
            toast.warning('Fill the form');
        } else {
            const body = {
                ...display, category: category
            };
            const response = await updateAnEmpDetails(id, body);
            console.log(response);
            if (response.status >= 200 && response.status < 300) {
                setdepartmentStatus(response.data)
                toast.success('Department Uploaded Successfully');
                handleClose();
                console.log('');
               
            } else {
                toast.error('Oops!.. Something went wrong.');
            }
        }
    }
    useEffect(() => {
      
    }, [])

    return (
        <>

            <Button onClick={handleShow} variant="primary"><i class="fa-solid fa-folder-plus"></i></Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title ><i class="fa-solid fa-pencil me-2 text-success"></i>Add Department</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='p-3 rounded' >

                        <Form.Group className='mb-3' controlId="validationCustom02">
                            <Form.Control type="text" placeholder='Enter Department Name' onChange={(e) => setCategory(e.target.value)} />
                        </Form.Group>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleAddCategory} >Add</Button>
                </Modal.Footer>

            </Modal>
            <ToastContainer position='top-center' theme='colored' autoClose={2000} />

        </>
    )
}

export default Update