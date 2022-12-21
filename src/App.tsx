import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import {Header} from './components/App/Header';
import {Footer} from './components/App/Footer';
import {Home} from './views/Home';
import {About} from "./views/About";
import {Reviews} from "./views/Reviews";
import Login from "./views/Login/Login";
import './App.css';

import {Routes, Route, BrowserRouter} from "react-router-dom";
import {Container} from "react-bootstrap";


const App = () => {
  return (
      <BrowserRouter>
        <body>
        <div className="Body">
          <Header/>
          <Container className="d-inline-block mb-5">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/reviews" element={<Reviews/>}/>
              <Route path="/login" element={<Login/>}/>
            </Routes>
          </Container>
          <Footer/>
        </div>
        </body>
      </BrowserRouter>
  )
}
export default App;