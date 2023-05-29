import React from "react"
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Cart from "../components/Cart";
import Footer from '../components/Footer'


function Home() {
    return ( 
        <>
        <Navbar/>
            <Carousel/>
            <Header/>
            <Cart/>
            <Footer/>
        </>
     );
}

export default Home;