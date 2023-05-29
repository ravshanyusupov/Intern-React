import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Form from "./Form";


function Request() {
    const data = localStorage.key(0)
    const dataItem = localStorage.getItem(data)
    console.log(JSON.parse(dataItem));
    return ( 
        <>
            <Navbar/>
            <Form/>
            <Footer/>   
        </>
     );
}

export default Request
