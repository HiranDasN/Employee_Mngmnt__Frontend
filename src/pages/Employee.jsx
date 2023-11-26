import React, { useState } from 'react'
import AddEmploye from '../components/AddEmploye'
import ListEmployee from '../components/ListEmployee'


function Employee() {
    const [uploadStatus, setUploadStatus] = useState({})
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-4 col-sm-12 d-flex justify-content-center flex-column">
                        <h1 className='title' style={{ fontWeight: 'bold' }}>The only way to do great work is to love what you do.</h1>
                        <AddEmploye setUploadStatus={setUploadStatus} />
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-6 col-sm-12">
                        <img className='w-100' src='https://t3.ftcdn.net/jpg/03/64/90/68/240_F_364906832_3CWsp5oXzh8oauRKz7SYtPfCZ57JfESZ.jpg' alt="Responsive Image" />
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <div className='text-center'>
                    <h1 className='fw-bolder' style={{ fontSize: '40px' }}>Employees</h1>
                </div>
                <div className="row ms-2 mt-5">
                    <div className="col-md-10">
                        <ListEmployee uploadStatus={uploadStatus} />
                    </div>
               
                </div>
            </div>


        </>
    )
}

export default Employee