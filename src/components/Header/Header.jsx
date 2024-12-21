// import React, { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu and close
// import "./Header.css";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.classList.add("menu-open");
//     } else {
//       document.body.classList.remove("menu-open");
//     }
//   }, [isMenuOpen]);

//   return (
//     <header className="header">
//       {/* Hamburger Icon for Mobile */}
//       <div className={`hamburger ${isMenuOpen ? "menu-open" : ""}`} onClick={toggleMenu}>
//   {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
// </div>

//       {/* Primary Logo */}
//       <div className="primary-logo">
//         <Link to='/'> <img src="/assets/main.png" alt="Primary Logo" /> </Link>
//       </div>

//       {/* Navigation Links (Desktop Only) */}
//       <nav className="nav-links-desktop">
//       <Link to='/Dips'><li className="nav-item">Dips</li></Link>
//       <Link to='/Frozen'><li className="nav-item">Frozen</li></Link>
//       <Link to='/Juice'><li className="nav-item">Juice</li></Link>
//         <Link to='/about-us'><li className="nav-item">About Us</li></Link>
//         <Link to='/faq'> <li className="nav-item">FAQs</li> </Link>
//         <Link to='/contact-us'><li className="nav-item">Contact Us</li></Link>
//         <Link to='/fromorchardtomarket'><li className="nav-item"> From Orchard To Market</li></Link>
//       </nav>

//       {/* Secondary Logo */}
//       <div className="secondary-logo">
//         <img src="/assets/vt.png" alt="Secondary Logo" />
//       </div>

//       {/* Mobile Menu */}
//       <nav className={`mobile-menu ${isMenuOpen ? "menu-active" : ""}`}>
//         <div className="mobile-menu-content">
//           {/* Primary Logo (Top-left when menu opens) */}
//           <div className="mobile-primary-logo">
//             <img src="/assets/main.avif" alt="Primary Logo" />
//           </div>

//           {/* Centered Links */}
//           <div className="mobile-links">
//             <a href="#products" onClick={toggleMenu}>Our Products</a>
//             <a href="#about" onClick={toggleMenu}>About Us</a>
//             <a href="#faqs" onClick={toggleMenu}>FAQs</a>
//             <a href="#contact" onClick={toggleMenu}>Contact Us</a>
//             <a href="#orchard" onClick={toggleMenu}>From Orchard To Market</a>
//           </div>

//           {/* Secondary Logo at Bottom */}
//           <div className="mobile-secondary-logo">
//             <img src="/assets/vt.png" alt="Secondary Logo" />
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;



import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isMenuOpen]);

  return (
    <header className="header">
      {/* Hamburger Icon for Mobile */}
      <div
        className={`hamburger ${isMenuOpen ? "menu-open" : ""}`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      {/* Primary Logo */}
      <div className="primary-logo">
        <Link to="/">
          <img src="/assets/main.png" alt="Primary Logo" />
        </Link>
      </div>

      {/* Navigation Links (Desktop Only) */}
      <nav className="nav-links-desktop">
        {/* <Link to="/Dips">
          <li className="nav-item">Dips</li>
        </Link>
        <Link to="/Frozen">
          <li className="nav-item">Frozen</li>
        </Link>
        <Link to="/Juice">
          <li className="nav-item">Juice</li>
        </Link> */}
        <div className="dropdown nav-item">
          Our Products
          <div className="dropdown-menu">
          <Link to="/Juice">
              <li>Chilled Coldpressed Juices</li>
            </Link>
            <Link to="/Frozen">
              <li>Frozen Coldpressed Juices</li>
            </Link>
            
            <Link to="/Dips">
              <li>Dips</li>
            </Link>
          </div>
        </div>
        <Link to="/about-us">
          <li className="nav-item">About Us</li>
        </Link>
        <Link to="/faq">
          <li className="nav-item"> FAQ's</li>
        </Link>
        <Link to="/contact-us">
          <li className="nav-item">Contact Us</li>
        </Link>
        <Link to="/fromorchardtomarket">
          <li className="nav-item">From Orchard To Market</li>
        </Link>
      </nav>

      {/* Secondary Logo */}
      <div className="secondary-logo">
        <img src="/assets/vt.png" alt="Secondary Logo" />
      </div>

      {/* Mobile Menu */}
      <nav className={`mobile-menu ${isMenuOpen ? "menu-active" : ""}`}>
        <div className="mobile-menu-content">
          <div className="mobile-primary-logo">
            <img src="/assets/main.avif" alt="Primary Logo" />
          </div>
          <div className="mobile-links">
            <Link to="/Dips" onClick={toggleMenu}>
              Dips
            </Link>
            <Link to="/Frozen" onClick={toggleMenu}>
            Frozen Coldpressed Juices
            </Link>
            <Link to="/Juice" onClick={toggleMenu}>
            Chilled Coldpressed Juices
            </Link>
            <Link to="/about-us" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/faq" onClick={toggleMenu}>
              FAQ's
            </Link>
            <Link to="/contact-us" onClick={toggleMenu}>
              Contact Us
            </Link>
            <Link to="/fromorchardtomarket" onClick={toggleMenu}>
              From Orchard To Market
            </Link>
          </div>
          <div className="mobile-secondary-logo">
            <img src="/assets/vt.png" alt="Secondary Logo" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
