import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import Request from "./components/Request"
import PageNot from "./components/PageNot"
import About from "./components/About"
import { toast, ToastContainer } from 'react-toastify';
import Detail from "./components/postDetail"


export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/request" element={<Request />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/:id" element={<Detail/>}/>
          <Route path='/*' element={<PageNot />}/>
      </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  )
}