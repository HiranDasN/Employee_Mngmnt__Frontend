import React, { useEffect, useState } from 'react'
import { deleteEmployee, getEmployee } from '../services/allAPI';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import Update from './Update';
function ListEmployee({ uploadStatus }) {
    const [employeeModals, setEmployeeModals] = useState({}); // State to track modal visibility for each employee

    const handleShow = (id) => setEmployeeModals((prev) => ({ ...prev, [id]: true }));
    const handleClose = (id) => setEmployeeModals((prev) => ({ ...prev, [id]: false }));

    const [allEmployee, SetAllEmployee] = useState([])

    const getallEmployee = async () => {
        const response = await getEmployee()
        const { data } = response
        SetAllEmployee(data);
    }
    console.log(allEmployee);
    useEffect(() => {
        getallEmployee()
    }, [uploadStatus])

    const removeEmployee = async (id) => {
        const response = await deleteEmployee(id)
        getallEmployee()
    }
    return (
        <>


            <div className="container mt-5">
                <div className="row">
                    {allEmployee?.length > 0
                        ? allEmployee?.map((item) => (
                            <div className="col-md-4 mb-3">
                                {/* <Card style={{ width: '100%', height: '350px' }} className='mb-3 shadow-lg border-0'>
                                    <Card.Img onClick={() => handleShow(item.id)} style={{ width: '100%', height: '280px' }} variant="top" src={item.ImageUrl} />
                                    <Card.Body className='d-flex justify-content-between align-item-center'>
                                        <Card.Title><h6 className="card-title fs-3"><strong>{item.Name}</strong></h6></Card.Title>
                                        <Card.Text>
                                        </Card.Text>
                                        <Button onClick={(e) => removeEmployee(item?.id)} variant="danger"><i class="fa-solid fa-trash-can"></i></Button>
                                    </Card.Body>
                                </Card> */}
                                <div className="card mb-3 bg-dark shadow-lg border-0" style={{ width: " 25rem" }}>
                                    <img className='mt-2' src={item.ImageUrl} onClick={() => handleShow(item.id)} style={{ width: '200px', height: '200px', borderRadius: '50%', margin: '0 auto', boxShadow: '0 0 10px rgba(0,0,0,.2)' }} alt="" />
                                    <div class="card-body text-center text-white">
                                        <h5 class="card-title fs-3"><strong>{item.Name}</strong></h5>
                                        <p class="card-text ">My Designation is <strong>{item.Designation}</strong></p>
                                        <div className='text-center'>
                                            {/* <Button variant="primary"><i class="fa-solid fa-pen"></i></Button> */}
                                            <Update/>
                                            <Button className='ms-3' onClick={(e) => removeEmployee(item?.id)} variant="danger"><i class="fa-solid fa-trash-can"></i></Button>
                                        </div>
                                    </div>
                                </div>
                                <Modal
                                    show={employeeModals[item.id] || false}
                                    onHide={() => handleClose(item.id)}
                                    backdrop="static"
                                    keyboard={false}
                                    size="lg"
                                    centered
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title className='fw-bold'><i className="fa-solid text-success fa-users-viewfinder"></i> Employee Details</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Row>
                                            <Col md={8} className='text-center mt-3'>
                                                <img style={{ width: '280px', height: '280px' }} src={item.ImageUrl} alt="" />
                                            </Col>
                                            <Col md={4} className='mt-5 mb-2 '>
                                                <p className="">Name: <strong> {item.Name}</strong></p>
                                                <p className="">Email: <strong> {item.Email}</strong></p>
                                                <p className="">Gender: <strong> {item.Gender}</strong></p>
                                                <p className="">Designation: <strong> {item.Designation}</strong></p>
                                                <p className="">Phone: <strong> {item.Phone}</strong></p>
                                            </Col>
                                        </Row>
                                    </Modal.Body>
                                </Modal>

                            </div>



                        ))
                        : <p></p>}
                </div>
            </div >


        </>

    )
}

export default ListEmployee