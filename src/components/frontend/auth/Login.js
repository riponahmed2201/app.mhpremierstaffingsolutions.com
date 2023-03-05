import React from 'react'
import Navbar from '../../../layouts/frontend/Navbar'

function Login() {
    return (
        <div>
            <Navbar />
            <div className='container py-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-4'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>Login</h4>
                            </div>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group mb-3'>
                                        <label>Email</label>
                                        <input type="text" name="email" className='form-control mt-2' placeholder='Enter email' />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label>Password</label>
                                        <input type="password" name="password" className='form-control mt-2' placeholder='Enter password' />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <button type='submit' className='btn btn-primary'>Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login