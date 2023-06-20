import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Ipad from './Ipad';
import Mac from './Mac';
import Iphone from './Iphone';
import Watch from './Watch';
import Vision from './Vision';
function Navigation(){
 return<div className="container-fluid">
    
    <BrowserRouter>
    <header className="bd-navbar">
    <div className="d-flex justify-content-center">
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid text-center">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="mac" className="nav-link">Mac</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="ipad" className="nav-link">iPad</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="iphone" className="nav-link">Iphone</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="watch" className="nav-link">Watch</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="vision" className="nav-link">Vision</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    </header>
        
        <Routes>
            <Route path="ipad" element={<Ipad/>}></Route>
            <Route path="mac" element={<Mac/>}></Route>
            <Route path="iphone" element={<Iphone/>}></Route>
            <Route path="watch" element={<Watch/>}></Route>
            <Route path="vision" element={<Vision/>}>Vision</Route>
        </Routes>
    </BrowserRouter>
 </div>   
}
export default Navigation;