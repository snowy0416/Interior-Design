import React from 'react';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DesignDetailPage from './pages/DesignDetailPage';
// import UploadPage from './pages/UploadPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Kitchen from './pages/Kitchen';
import Bedroom from './pages/Bedroom';
import Living from './pages/Living';
import Bathroom from './pages/Bathroom';
import Office from './pages/Office';
import Furniture from './pages/Furniture';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
   <Router>
    <NavBar/>
    <Routes>
      <Route path ="/" element={<HomePage/>}/>
    <Route path ="/design" element={<DesignDetailPage/>}/>
    {/* <Route path ="/upload" element={<UploadPage/>}/> */}
    <Route path ="/profile" element={<ProfilePage/>}/>
    <Route path ="/login" element={<LoginPage/>}/>
    <Route path ="/signup" element={<SignupPage/>}/>
    <Route path ="/kitchen" element={<Kitchen/>}/>
    <Route path ="/bedroom" element={<Bedroom/>}/>
    <Route path ="/living" element={<Living/>}/>
    <Route path ="/bathroom" element={<Bathroom/>}/>
    <Route path ="/office" element={<Office/>}/>
    <Route path ="/furniture" element={<Furniture/>}/>
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
