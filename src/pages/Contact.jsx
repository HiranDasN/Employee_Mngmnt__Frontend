import React from 'react'
import { Form, Card } from 'react-bootstrap';

function Contact() {
    return (
        <>
            <div className="container mt-5">
                <div className="text-center mb-5">
                    <h1 className="fw-bolder">CONTACT US</h1>
                    <p className="lead">Have any questions or concerns? Reach out to us using the contact information below.</p>
                </div>

                <div className="row mt-4">

                    <div className="col-md-2"></div>
                    <div className="col-md-4 ms-5">
                        <div >
                            <h4 className="mb-4">Contact Information</h4>
                            <p className="mt-5">
                                <strong>Email:</strong> enagewith@company.com
                            </p>
                            <p>
                                <strong>Phone:</strong> +91 9876543210
                            </p>
                            <p>
                                <strong>Address:</strong> Engage Company @ Kochi
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <h4 className="mb-4 text-center">Any Queries</h4>
                        <Card className="bg-transparent text-light w-100 mb-4">
                            <Card.Body>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="Enter Your Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter your Email Id" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control as="textarea" placeholder="Enter Message" />
                                    </Form.Group>
                                    <div className='text-center'>
                                        <button className='btn btn-primary mt-3'>Submit</button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>

                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </>
    )
}

export default Contact