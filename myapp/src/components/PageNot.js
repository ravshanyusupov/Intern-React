import React from 'react';
import {FaHome} from "react-icons/fa";
import {Link} from 'react-router-dom'

function PageNot(props) {
    return (
            <div className="text-center">
                <h1>Oops!</h1>
                <h5 className='text-5xl mb-5'>404 - Page not found!</h5>
                <Link className='btn' to='/'><FaHome className='mr-2'/> Back to Home </Link>
            </div>
    );
}

export default PageNot;