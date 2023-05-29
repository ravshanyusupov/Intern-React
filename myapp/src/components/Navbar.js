import React from "react";
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai';


function Navbar() {
    return ( 
        <>
        <nav className="navbar navbar-expand-lg" style={{background: '#4fa6e4', borderRadius: '50px 50px 0px 0px'}}>
        <div className="container-fluid">
        <AiOutlineHome className="ms-4" style={{fontSize: '40px', color: 'white'}}/>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse text-center" id="navbarScroll">
                <ul className="navbar-nav">
                    <li className="nav-item px-4 fs-5 text-white"><Link className="text-decoration-none text-white" to='/'>Asosiy bo'lim</Link></li>
                    <li className="nav-item px-4 fs-5 text-white"><Link className="text-decoration-none text-white" to='/request'>Ariza to'ldirish</Link></li>
                    <li className="nav-item px-4 fs-5 text-white"><Link className="text-decoration-none text-white" to='/about'>Yotoqxona haqida</Link></li>
                </ul>
              </div>
        </div>
        </nav> 
        </>
     );
}



export default Navbar;