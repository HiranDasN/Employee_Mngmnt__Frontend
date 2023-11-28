import React from 'react'

function Footer() {
    return (
        <>
            <footer className="bg-dark text-light py-5 ">
                <div className="container text-center mt-3 ">
                    <div className="row justify-content-center">
                        <div className="col-md-3">
                            <h5 className='fw-bolder fs-3'>EngageWith</h5>
                            <p>Follow us:</p>
                            <ul className="list-unstyled d-flex justify-content-center ">
                                <li><a href="" style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-x-twitter fs-2 "></i></a></li>
                                <li><a href="" style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-square-facebook fs-2 ms-3"></i></a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 ">
                            <h5 className='fw-bolder fs-3'>Resources</h5>
                            <ul className="list-unstyled">
                                <li>News & insights</li>
                                <li>Careers</li>
                                <li>Events</li>
                              
                            </ul>
                        </div>

                        <div className="col-md-3">
                            <h5 className='fw-bolder fs-3'>Company</h5>
                            <ul className="list-unstyled">
                                <li>About us</li>
                                <li>Support</li>
                                <li>Partners</li>
                                
                        
                            </ul>
                        </div>

                        <div className="col-md-3">
                            <h5 className='fw-bolder fs-3'>Legal</h5>
                            <ul className="list-unstyled">
                                <li>Cookie policy</li>
                                <li>Privacy policy</li>
                                <li>Terms of use</li>
                            </ul>
                        </div>
<hr className='mt-3' />
                    </div>
                    <div className="row mt-4">

                        <div className="col-md-2"></div>

                        <div className="col-md-8 text-center">
                            <p>&copy; 2023 EnageWith. All rights reserved.</p>

                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </footer>
        </>
    )
}

export default Footer