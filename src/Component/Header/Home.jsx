import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
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
              {/* start left */}
              <div className="left-block">
                {/* Experience */}
                <div className="left-block-main">
                  <div className="description">
                    <h4>Experience</h4>
                    <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <div className="icon1">
                    <img src="/img/icon-1.jpg" alt="" />
                  </div>
                </div>
                {/* Products */}
                <div className="left-block-main">
                  <div className="description">
                    <h4>Products</h4>
                    <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <div className="icon1">
                    <img src="/img/icon-2.jpg" alt="" />
                  </div>
                </div>
                {/* Approach */}
                <div className="left-block-main">
                  <div className="description">
                    <h4>Approach</h4>
                    <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <div className="icon1">
                    <img src="/img/icon-3.jpg" alt="" />
                  </div>
                </div>


              </div>

              {/* start center */}
              <div className="left-block">
                {/* <div className="center"> */}
                <div className="features">
                  <img src="/img/features.jpg" alt="" />
                </div>
                {/* </div> */}
              </div>
              {/* end center */}
              {/* start right */}
              {/* Approach */}
              <div className="left-block">
                <div className="right-block-main">
                  <div className="icon-right">
                    <img src="/img/icon-4.jpg" alt="" />
                  </div>
                  <div className="description-right">
                    <h4>Approach</h4>
                    <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>

                {/* Delivery */}
                <div className="right-block-main">
                  <div className="icon-right">
                    <img src="/img/icon-5.jpg" alt="" />
                  </div>
                  <div className="description-right">
                    <h4>Delivery</h4>
                    <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>

                <div className="right-block-main">
                  <div className="icon-right">
                    <img src="/img/icon-6.jpg" alt="" />
                  </div>
                  <div className="description-right">
                    <h4>Support</h4>
                    <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Portfolio */}
        <div className="section">
          <div className="container">
            <div className="section-header">
              <h2>Our Portfolio</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="portfolio-main-block">
              <div className='portfolio'>
                <ul>
                  <li>All</li>
                  <li>App Design</li>
                  <li>App Development</li>
                  <li>Branding</li>
                  <li>It Solutions</li>
                </ul>
              </div>

              {/* <div className="portfolio-block"> */}
              <div className="portfolio-block-inner">
                <div className="portfolio-item">
                  <div className="portfolio-img">
                    <div className="img-box">

                      <img src="/img/product-1.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="portfolio-item">
                  <div className="portfolio-img">
                    <div className="img-box">

                      <img src="/img/product-2.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="portfolio-item">
                  <div className="portfolio-img">
                    <div className="img-box">

                      <img src="/img/product-3.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="portfolio-item">
                  <div className="portfolio-img">
                    <div className="img-box">

                      <img src="/img/product-4.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="portfolio-item">
                  <div className="portfolio-img">
                    <div className="img-box">

                      <img src="/img/product-5.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="portfolio-item">
                  <div className="portfolio-img">
                    <div className="img-box">

                      <img src="/img/product-6.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}

            </div>
          </div>
        </div>
        {/* End Our Portfolio */}

        <div className="section">
          <div className="container">
            <div className="section-header">
              <h2>Pricing Plans</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="Pricing-block-inner">
              {/* basicblock1  start*/}
              <div className="Pricing-item">
                <div className="Pricing-block">
                  <div className="title">
                    <h2>Basic</h2>
                  </div>
                  <div className="price">
                    <h4><sup>$</sup>25</h4>
                  </div>
                  <div className="option">
                    <ul>
                      <li><FaRegCircleCheck className='check' /> Unlimited GB Space</li>
                      <li><FaRegCircleCheck className='check' />  30 Domain Names</li>
                      <li><FaRegCircleCheck className='check' />   Free SSL</li>
                      <li><FaRegCircleCheck className='check' />   Daily Backup</li>
                      <li><FaRegCircleCheck className='check' />   Free Templates</li>
                      <li><FaRegCircleCheck className='check' />   Free Email</li>
                      <li><FaRegCircleCheck className='check' />   10 Databases</li>
                      <li><FaRegCircleCheck className='check' />   Unlimited Email Address</li>
                      <li><FaRegCircleCheck className='check' />   Live Support</li>
                    </ul>
                    <button type='button' className='Order'>Order Now</button>
                  </div>
                </div>
              </div>
              {/* basicblock  End*/}
              {/* basicblock2  start*/}
              <div className="Pricing-item">
                <div className="Pricing-block">
                  <div className="title">
                    <h2>Standard</h2>
                  </div>
                  <div className="price">
                    <h4><sup>$</sup>50</h4>
                  </div>
                  <div className="option">
                    <ul>
                      <li><FaRegCircleCheck className='check' /> Unlimited GB Space</li>
                      <li><FaRegCircleCheck className='check' />  30 Domain Names</li>
                      <li><FaRegCircleCheck className='check' />   Free SSL</li>
                      <li><FaRegCircleCheck className='check' />   Daily Backup</li>
                      <li><FaRegCircleCheck className='check' />   Free Templates</li>
                      <li><FaRegCircleCheck className='check' />   Free Email</li>
                      <li><FaRegCircleCheck className='check' />   10 Databases</li>
                      <li><FaRegCircleCheck className='check' />   Unlimited Email Address</li>
                      <li><FaRegCircleCheck className='check' />   Live Support</li>
                    </ul>
                    <button type='button' className='Order'>Order Now</button>
                  </div>
                </div>
              </div>
              {/* basicblock2  end*/}
              {/* basicblock3  start*/}
              <div className="Pricing-item">
                <div className="Pricing-block">
                  <div className="title">
                    <h2>Premium</h2>
                  </div>
                  <div className="price">
                    <h4><sup>$</sup>100</h4>
                  </div>
                  <div className="option">
                    <ul>
                      <li><FaRegCircleCheck className='check' /> Unlimited GB Space</li>
                      <li><FaRegCircleCheck className='check' />  30 Domain Names</li>
                      <li><FaRegCircleCheck className='check' />   Free SSL</li>
                      <li><FaRegCircleCheck className='check' />   Daily Backup</li>
                      <li><FaRegCircleCheck className='check' />   Free Templates</li>
                      <li><FaRegCircleCheck className='check' />   Free Email</li>
                      <li><FaRegCircleCheck className='check' />   10 Databases</li>
                      <li><FaRegCircleCheck className='check' />   Unlimited Email Address</li>
                      <li><FaRegCircleCheck className='check' />   Live Support</li>
                    </ul>
                    <div>
                      <button type='button' className='Order'>Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* basicblock3  end*/}

            </div>
          </div>
        </div>

        <div  className="section">
          <div className="container">
            <div className="section-header">
              <h2>Testimonials</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home














