import {React,useState,useEffect } from 'react';
import { MdPersonOutline } from 'react-icons/md';
import { IoLockClosedOutline } from 'react-icons/io5';
import '../App.css';
import Navigationbar from '../components/home/Navigationbar';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


function Login() {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  useEffect(() => {
    document.title = 'Indevice-Login';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="login-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="bg-white shadow rounded d-flex align-items-center justify-content-center login-container">
                <div className="row">
                  <div className="col-md-6 pe-0">
                    <div className="form-left h-100 py-5 px-5">
                      <h3 className="mb-3">Login Now</h3>
                      <form className="row g-4" action='POST'>
                        <div className="col-12">
                          <label>Username<span className="text-danger">*</span></label>
                          <div className="input-group">
                            <div className="input-group-text"><MdPersonOutline /></div>
                            <input type="email" className="form-control" placeholder="Enter Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                          </div>
                        </div>

                        <div className="col-12">
                          <label>Password<span className="text-danger">*</span></label>
                          <div className="input-group">
                            <div className="input-group-text"><IoLockClosedOutline /></div>
                            <input type="password" className="form-control" placeholder="Enter Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                          </div>
                        </div>
                        <div className="col-12">
                        <Button variant='contained' color='warning' disableRipple>Login</Button>
                        </div>
                        <div>
                          <p className="text-center mt-3 text-secondary">If you don't have an account, Please <Link to="/register" style={{ color: "rgb(250, 145, 25)" }}>Register Now</Link></p>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6 ps-0 d-none d-md-block">
                    <div className="form-right h-100 bg-white text-center pt-5 d-flex flex-column justify-content-center">
                      <img src='../image/Indevice.ico' alt="Inddevice Logo" className="img-fluid mx-auto mb-4" style={{ maxHeight: '150px' }} />
                      <h2 className="fs-1" style={{ color: "rgb(250, 145, 25)" }}>Welcome Back!!!</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Login;


