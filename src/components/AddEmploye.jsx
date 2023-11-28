import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { uploadEmployee } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddEmploye({ setUploadStatus }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [employee, setEmployee] = useState({
        Name: "",
        Email: "",
        Gender: "",
        Dob: "",
        Designation: "",
        Address: "",
        ImageUrl: "",
        Phone: "",
    })
    console.log(employee);

    const handleUpload = async () => {
        const { Name, Email, Gender, Dob, Designation, Address, ImageUrl, Phone } = employee
        if (!Name || !Email || !Gender || !Dob || !Designation || !Address || !ImageUrl || !Phone) {
            toast.warning("please fill the form completely")
        }
        else {
            const response = await uploadEmployee(employee)
            if (response.status >= 200 && response.status < 300) {
                setUploadStatus(response.data)
                toast.success("uploaded successfully");
                handleClose()
                setEmployee('')
            }
            else {
                console.log(response);
                toast.error('Something went wrong....try again later')
            }
        }
    }
    return (
        <>
            <button onClick={handleShow} className='btn rounded bg-success' style={{ color: 'white', fontSize: '17px', fontWeight: '700', width: '150px' }}>Add Employee </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'

            >
                <Modal.Header closeButton>
                    <Modal.Title> <i class="fa-regular text-success fa-pen-to-square"></i> Add Employee Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group onChange={(e) => setEmployee({ ...employee, Name: e.target.value })} className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Enter Employee Name"
                            />
                        </Form.Group>
                        <Form.Group onChange={(e) => setEmployee({ ...employee, Email: e.target.value })} className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Enter Employee Email"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='ms-3'>Gender</Form.Label>
                            <div className='ms-3'>
                                <Form.Check
                                    inline
                                    label="Male"
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    onChange={(e) => setEmployee({ ...employee, Gender: "Male" })}
                                />
                                <Form.Check
                                    inline
                                    label="Female"
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    onChange={(e) => setEmployee({ ...employee, Gender: "Female" })}
                                />
                            </div>
                        </Form.Group>
                        <Form.Group onChange={(e) => setEmployee({ ...employee, Dob: e.target.value })} className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="date"
                                placeholder="Enter Date of birth"
                            />
                        </Form.Group>
                        <Form.Group onChange={(e) => setEmployee({ ...employee, Designation: e.target.value })} className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Enter Employee Designation"
                            />
                        </Form.Group>
                        <Form.Group onChange={(e) => setEmployee({ ...employee, Address: e.target.value })} className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Enter Address"
                            />
                        </Form.Group>
                        <Form.Group onChange={(e) => setEmployee({ ...employee, ImageUrl: e.target.value })} className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Enter Employee Photo URL"
                            />
                        </Form.Group>
                        <Form.Group onChange={(e) => setEmployee({ ...employee, Phone: e.target.value })} className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                placeholder="Enter Phone Number"
                            />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleUpload} variant="success">Upload</Button>
                </Modal.Footer>
                <ToastContainer position='top-center' theme='colored' autoClose={2000} />
            </Modal>
        </>
    )
}

export default AddEmploye