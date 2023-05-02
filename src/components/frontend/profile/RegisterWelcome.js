import React from 'react'

function RegisterWelcome() {
    return (
        <div className='col-lg-6 justify-content-center p-5 offset-lg-3'>
            <div className="card">
                <div className="text-right" style={{ display: 'none' }}> <i className="fa fa-times" /> </div>
                <div className="card-body text-center"> <img style={{ width: '100px', height: '100px' }} src="logo.png" alt='logo' />
                    <h4 style={{ marginTop: '15px' }}>
                        Congratulations!
                        Register successfully.
                    </h4>
                    <p>Our hr will contact within 24 hours.</p>
                    <p>Download our app for more experience</p>
                </div>
                <div className='p-4 d-flex justify-content-around align-items-center' >
                    <a target='_blank' href="https://play.google.com/store/apps/details?id=com.invain.mh" className='p-4 row justify-content-md-center'>
                        <img src="assets/frontend/images/indexImages/Group 116147.png" alt='logo' />
                    </a>
                    <a target='_blank' href="https://apps.apple.com/us/app/mh/id6446052294" className='p-4 row justify-content-md-center'>
                        <img src="assets/frontend/images/indexImages/appleButton.png" alt='logo' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RegisterWelcome