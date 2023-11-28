import React from 'react'
import { Form, Button } from 'react-bootstrap';
function Contact() {
    return (
        <>
            <div className='' style={{ backgroundImage: 'url("https://img.freepik.com/premium-photo/laptop-sits-table-plant-potted-plant_244157-4322.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}>
                <div className=" d-flex justify-content-center align-items-center">
                    <h2 style={{ color: 'white', fontWeight: 'bolder', fontSize: '50px', padding: '20px', marginTop: '100px' }}>
                        CONTACT US
                        <p className="lead mt-3">Have any questions or concerns? Reach out to us using the contact information below.</p>
                    </h2>

                </div>

            </div>

            <div className="container text-center mt-5 ">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <h5 className='fw-bolder fs-5'><i class="fa-solid fa-globe"></i> HOURS OF OPERATION</h5>
                        <p>09:00 to 17:00, Mon to Fri(Excluding Holiday)</p>
                    </div>
                    <div className="col-md-4">
                        <h5 className='fw-bolder fs-5'><i class="fa-solid fa-phone"></i> PHONE</h5>
                        <p>+91 7654321098</p>
                    </div>
                    <div className="col-md-4">
                        <h5 className='fw-bolder fs-5'><i class="fa-regular fa-message"></i> GENERAL INQUIRIES</h5>
                        <p><a href="" style={{ color: 'black' }}> info.engagewith@gmail.com</a></p>
                    </div>
                </div>
            </div>

            <div className='container mt-3'>
                <div className='text-center'>
                    <h5 className='fw-bold'>Our Customer Service Team is Waiting To Assist You</h5>
                </div>
                <div className='text-center mt-4'>
                    <h5 className=''>You Can also Check Your Social Media Profiles</h5>
                </div>
            </div>

            <div className='container mt-4 mb-4' >
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 text-center">

                        <h4 className='fw-bolder'>Any Queries</h4>
                        <Form className='mt-2'>
                            <Form.Group controlId="formName">

                                <Form.Control
                                    style={{ backgroundColor: '#F0F1F8' }}
                                    type="text"
                                    placeholder="Enter your name"
                                    name="name"
                                    className='mt-2'
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formEmail">

                                <Form.Control
                                    style={{ backgroundColor: '#F0F1F8' }}
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    className='mt-3'
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formMessage">

                                <Form.Control
                                    style={{ backgroundColor: '#F0F1F8' }}
                                    as="textarea"
                                    rows={3}
                                    placeholder="Enter your message"
                                    name="message"
                                    className='mt-3'
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className='mt-3'>
                                Submit
                            </Button>
                        </Form>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Contact