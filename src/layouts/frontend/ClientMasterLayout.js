import React from 'react';

import Footer from './Footer'
import Navbar from './Navbar';

import { Outlet } from 'react-router-dom';

function ClientMasterLayout() {

    return (
        <div>
            <Navbar />
            <main >
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default ClientMasterLayout