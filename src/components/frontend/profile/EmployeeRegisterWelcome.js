import React from 'react'

function EmployeeRegisterWelcome() {
    return (
        <div>
            <div className='col-lg-6 justify-content-center p-5 offset-lg-3'>
                <div className="">
                    <div className="">
                        <div className="card">
                            <div className="text-right" style={{ display: 'none' }}> <i className="fa fa-times" /> </div>
                            <div className="card-body text-center"> <img style={{ width: '100px', height: '100px' }} src="logo.png"  alt='logo'/>
                                <h4 style={{ marginTop: '15px' }}>Congratulations!
                                    Register successfully.</h4>
                                <p>Our hr will contact with you very soon</p>
                                <p>Download our app for more experience</p>
                            </div>
                            <br />
                            <br />
                            <div className='p-4 row justify-content-md-center' >
                                <img style={{ width: '260px', height: '100px' }} src="google-playstore-logo.png" alt='logo' />
                                <img style={{ width: '260px', height: '100px' }} className="float-right" src="apple-app-store-logo.png" alt='logo' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeRegisterWelcome