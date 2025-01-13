import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import servicedesign from '../../../src/img/servicedesign.png';
import servicehosting from '../../../src/img/servicehosting.svg'
import servicesocial from '../../../src/img/servicesocial.svg'
import serviceseo from '../../../src/img/serviceseo.svg'
import servicecloud from '../../../src/img/servicecloud.svg';
import servicesecure from '../../../src/img/servicesecure.svg';
import './Navbar.css'
const Home = () => {
  return (
    <div>
      <div className="block ">
        <div className='block-inner'>
          <img src='/img/backimg.jpg' />
        </div>
        <div className='block-text container'>
          {/* <div className='block-text'> */}
          <h1>Delivering Superior Services <span>IT Solutions</span></h1>
          <p>You can easily change any design to your own. It is also highly customizable SEO friendly template.</p>
          <div className='icons'>
            <ul>
              <li><IoLogoLinkedin href='http://linkedin.com/in/kunjesh-bhikadiya-a6a5ba1b8' target='new' /></li>
              <li><FaTwitter /></li>
              <li><FaInstagram /></li>
              <li><FaFacebook /></li>
            </ul>
            <div className='btns'>
              <button type='button' className='GetQuotess'>Get Quotes</button>
              <button type='button' className='GetStarted'>Get Started</button>
            </div>
          </div>
          {/* </div> */}
        </div>


        {/* Application Design */}
        <div className='section'>
          <div className='container'>
            <div className='services-inner'>
              <div className='services-item'>
                <div className='icon-box'>
                  <div className='icon'>
                    <img src={servicedesign} />
                  </div>
                  <h4 className='title'>
                    <a className='stretched-link'>Application Design</a>
                  </h4>
                  <p>
                    Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>

              {/* web Hosting */}
              <div className='services-item'>
                <div className='icon-box'>
                  <div className='icon'>
                    <img src={servicehosting} />
                  </div>
                  <h4 className='title'>
                    <a className='stretched-link'>Web Hosting</a>
                  </h4>
                  <p>
                    Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className='services-item'>
                <div className='icon-box'>
                  <div className='icon'>
                    <img src={servicesocial} />
                  </div>
                  <h4 className='title'>
                    <a className='stretched-link'>Social Media</a>
                  </h4>
                  <p>
                    Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
              {/* SEO Optimization */}
              <div className='services-item'>
                <div className='icon-box'>
                  <div className='icon'>
                    <img src={serviceseo} />
                  </div>
                  <h4 className='title'>
                    <a className='stretched-link'>SEO Optimization</a>
                  </h4>
                  <p>
                    Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
              {/* Cloud Server */}
              <div className='services-item'>
                <div className='icon-box'>
                  <div className='icon'>
                    <img src={servicecloud} />
                  </div>
                  <h4 className='title'>
                    <a className='stretched-link'>Cloud Server</a>
                  </h4>
                  <p>
                    Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
              {/* Data Secuity */}
              <div className='services-item'>
                <div className='icon-box'>
                  <div className='icon'>
                    <img src={servicesecure} />
                  </div>
                  <h4 className='title'>
                    <a className='stretched-link'>Application Design</a>
                  </h4>
                  <p>
                    Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us block */}
        <div className="section">
          <div className="container">
            <div className="section-header">

              <h2>Why Choose Us</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="row">
             <div className="left-block">
              <div className="left-block-main">
                
              </div>
             </div>
            </div>
          </div>
        </div>



      </div>

    </div>
  )
}

export default Home
