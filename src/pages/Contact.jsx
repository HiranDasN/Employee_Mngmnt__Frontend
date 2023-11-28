import React from 'react'
import { Form ,Card  } from 'react-bootstrap';

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
                <div className="row justify-content-center ">
                    <div className="col-md-4 border shadow w-25 me-3">
                        <h5 className='fw-bolder fs-5 mt-3'><i class="fa-solid fa-globe"></i> HOURS OF OPERATION</h5>
                        <p>09:00 to 17:00, Mon to Fri(Excluding Holiday)</p>
                    </div>
                    <div className="col-md-4 border shadow me-3 ">
                        <h5 className='fw-bolder fs-5 mt-3'><i class="fa-solid fa-phone"></i> PHONE</h5>
                        <p>+91 7654321098</p>
                    </div>
                    <div className="col-md-4 shadow me-3">
                        <h5 className='fw-bolder fs-5 mt-3'><i class="fa-regular fa-message"></i> GENERAL INQUIRIES</h5>
                        <p><a href="" style={{ color: 'black' }}> info.engagewith@gmail.com</a></p>
                    </div>
                </div>
            </div>

            
            <div className='container mt-5 '>
                <div className='text-center'>
                    <h2 className='fw-bold'>Our Customer Service Team is Waiting To Assist You</h2>
                </div>

          <div className='d-flex justify-content-center align-items-center container mt-3 mb-4 '>
                <div className=" container row mt-4">
                        <div className='col-md-2'></div>
    
                        <div className="col-md-4 ">
                            <img src="https://cdn.pixabay.com/photo/2023/07/04/19/43/man-8106958_1280.png" width={'100%'} height={'400px'} alt="" />
                      
                        </div>

                        
    
                        <div className="col-md-4   border shadow  bg-transparent" >
                            <h4 className="mb-4 text-center mt-2">Any Queries</h4>
                            <Card className="bg-transparent text-light w-100 mb-4 no-hover-effect">
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
                                            <button className='btn btn-primary mt-2'>Submit</button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
    
                        </div>
                        <div className='col-md-2'></div>

                    </div>
          </div>

                
            </div>


        </>


    )
}

export default Contact