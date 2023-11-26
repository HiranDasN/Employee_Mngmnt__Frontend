import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';

import Form from 'react-bootstrap/Form';

function Update() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [update,setUpdate] = useState({})


    return (
        <>
        <Button onClick={handleShow} variant="primary"><i class="fa-solid fa-pen"></i></Button>

                <Modal
                  show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'

            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Employee Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                name='name'       
                                type="text"
                                placeholder="Enter Employee Name"
                                value={update.Name}
                                onChange={(e)=>setUpdate({...update,Name:e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                name="email"
                                type="text"
                                placeholder="Enter Employee Email"
                                value={update.Email}
                                onChange={(e)=>setUpdate({...update,Email:e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group  className="mb-3">
                            <Form.Label className='ms-3'>Gender</Form.Label>
                            <div className='ms-3'>
                                <Form.Check
                                    inline
                                    label="Male"
                                    type="radio"
                                    id="male"
                                    value={'male'}
                                    name="gender"
                                />
                                <Form.Check
                                    inline
                                    label="Female"
                                    type="radio"
                                    id="female"
                                    value={'female'}

                                    name="gender"
                                />
                            </div>
                        </Form.Group>
                        <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                name="dob"
                                type="date"
                                placeholder="Enter Date of birth"
                                value={update.Dob}
                                onChange={(e)=>setUpdate({...update,Dob:e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                name="designation"
                                type="text"
                                placeholder="Enter Employee Designation"
                                value={update.Designation}
                                onChange={(e)=>setUpdate({...update,Designation:e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                name="address"
                                type="text"
                                placeholder="Enter Address"
                                value={update.Address}
                                onChange={(e)=>setUpdate({...update,Address:e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                            name="phone"
                                type="text"
                                placeholder="Enter Phone Number"
                                value={update.Phone}
                                onChange={(e)=>setUpdate({...update,Phone:e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                name="photourl"
                                type="text"
                                placeholder="Enter Employee Photo URL"
                                value={update.PhotoUrl}
                                onChange={(e)=>setUpdate({...update,PhotoUrl:e.target.value})}
                            />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button   variant="success">Upload</Button>
                </Modal.Footer>
                </Modal>
             
       
        </>
    )
}

export default Update