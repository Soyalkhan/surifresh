// import React from 'react';
// import './Footer.css';
// import logo33 from '/assets/main.avif';
// import logoSuri from '/assets/vt.png';

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="logo-section">
//           <img src={logo33} alt="33 Logo" className="logo-33" />
//         </div>

//         <nav className="main-nav">
//           <ul>
//             <li><a href="/products">Our Products</a></li>
//             <li><a href="/about">About Us</a></li>
//             <li><a href="/contact">Contact Us</a></li>
//             <li><a href="/investor">Investor Relations</a></li>
//             <li><a href="/faqs">FAQs</a></li>
//           </ul>
//         </nav>

//         <div className="contact-info">
//           <h3>Contact</h3>
//           <div className="email">
//             <span>Email:</span>
//             <a href="mailto:info@surifreshextract.com">mailto:info@surifreshextract.com</a>
//           </div>
//           <div className="tel">
//             <span>Tel:</span>
//             <a href="tel:+919555720000">+91 9555720000</a>
//           </div>
//         </div>

//         <div className="social-icons">
//           <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
//           <a href="#" className="linkedin"><i className="fab fa-linkedin"></i></a>
//           <a href="#" className="facebook"><i className="fab fa-facebook"></i></a>
//         </div>

//         <div className="address-section">
//           <h3>Address</h3>
//           <div className="addresses">
//             <div className="registered-office">
//               <p>Registered Office address-</p>
//               <p>C-129, New Sabzi Mandi, Azadpur,</p>
//               <p>Delhi- 110033</p>
//               <p>Manufacturing Plant address-</p>
//               <p>Plot no- 576, HSIIDC, Rai Industrial</p>
//               <p>Estate, Sector 38, Sonipat, Haryana-131029</p>
//             </div>
//             <div className="bangalore-office">
//               <p>Bangalore address-</p>
//               <p>Shop number G-09, APMC FRUIT</p>
//               <p>MARKET, Electronic City Phase- 2,</p>
//               <p>Bangalore- 560100</p>
//             </div>
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <div className="footer-logo">
//             <img src={logoSuri} alt="Surifresh Extract Logo" />
//           </div>
//           <div className="footer-links">
//             <p>©2024 SurifreshExtract. All Rights Reserved</p>
//             <a href="/privacy">Privacy Policy</a>
//             <a href="/licenses">Licenses</a>
//           </div>
//           <p className="credits">Handcrafted by Delhi Digital Co.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;




import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import logo33 from '/assets/main.png';
import logoSuri from '/assets/vt.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Navigation and Logo Section */}
        <div className="footer-top">
          <div className="footer-logo">
          <Link to='/'>  <img src={logo33} alt="33 Logo" /></Link>
          </div>
          <nav className="main-nav">
            <ul>
              <li><Link to="/Juice">Our Products</Link></li>
              {/* <li><Link to="/Frozen">Frozen</Link></li>
              <li><Link to="/Dips">Dips</Link></li> */}
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li> <Link to="/investor-relations">Investor Relations</Link></li>
              <li><Link to="/faq"> FAQ's</Link></li>
            </ul>
          </nav>
        </div>

        {/* Address Section */}
        <div className="address-section">
          <h2 style={{color:"#ff8c00", fontWeight:"bold"}}>Addresses</h2>
          <div className="addresses">
            <div className="registered-office">
              <p style={{color:"#006B54", fontWeight:"bold"}}>Registered Office Address-</p>
              <p>C-129, New Sabzi Mandi, Azadpur, Delhi- 110033</p>
              
              
            <div className="registered-office">
            <p style={{color:"#006B54", fontWeight:"bold"}}>Manufacturing Plant Address-</p>
              <p>Plot no- 576, HSIIDC, Rai Industrial Estate, Sector 38, Sonipat, Haryana-131029</p>

              </div>
              
            </div>

            <div className="bangalore-office">
              <p style={{color:"#006B54", fontWeight:"bold"}}>Bangalore Address-</p>
              <p>Shop number G-09, APMC FRUIT MARKET, Electronic City Phase-2, Bangalore- 560100</p>
            </div>
            
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Contact</h3>
            <div className="email">
              <span>Email:</span>
              <a href="mailto:info@surifreshextract.com">info@surifreshextract.com</a>
            </div>
            <div className="tel">
              <span>Tel:</span>
              <a href="tel:+919555720000">+91 9555720000</a>
            </div>
          </div>
          </div>

        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <Link className='icon' to="https://www.instagram.com/surifreshextract/profilecard/?igsh=MXhzYTZpYnUyaDJhcQ%3D%3D"><FaInstagram size={20} /></Link>
          <Link className='icon' to="https://www.linkedin.com/company/surifreshextract/" ><FaLinkedin size={20} /></Link>
          <Link className='icon' to='https://www.facebook.com/surifreshextract' ><FaFacebook size={20} /></Link>
        </div>

        {/* Footer Bottom */}
        <hr />
        <div className="footer-bottom">
          <div className="footer-bottom-logo">
          <Link to='/'> <img  src={logoSuri} alt="Surifresh Extract Logo" /></Link>
          </div>
          <div className="footer-links">
            <p>©2024 SurifreshExtract. All Rights Reserved</p>
            <Link to="/Privacy-policy">Privacy Policy</Link>
            <Link to="/Licenses">Licenses</Link>
          </div>
          <p className="credits">Handcrafted by <span ><Link style={{color:"orange"}} to="https://delhidigital.co">Delhi Digital Co.</Link></span> </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
