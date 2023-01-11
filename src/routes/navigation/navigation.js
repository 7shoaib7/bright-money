import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import "./navigation.css"

const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <div className="navigation-links-container">
                    <Link className="logo" to="/">
                        <h1>BillBook</h1>
                    </Link>
                    <Link className='nav-link' to="/insights">
                        Insights
                    </Link>
                    <Link className='nav-link' to="/pay">
                        Pay
                    </Link>
                </div>

            </div>
            <Outlet />
        </>
    )
}

export default Navigation