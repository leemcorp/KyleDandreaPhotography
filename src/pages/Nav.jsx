import React, { useState, useRef, useEffect} from 'react';
import './ResponsiveNav.css';

const ResponsiveNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
   const navRef = useRef(null);

  const handleLinkClick = () => {
    setMenuOpen(false); // close menu on link click (mobile UX)
  };

    useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // 3️⃣ Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="responsive-nav">
      <div ref={navRef}>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#maternity" onClick={handleLinkClick}>maternity</a></li>
        <li><a href="#lifestyle" onClick={handleLinkClick}>lifestyle</a></li>
        <li><a href="#weddings_elopements" onClick={handleLinkClick}>weddings & elopements</a></li>
        <li><a href="#contact" onClick={handleLinkClick}>contact</a></li>
      </ul>
      </div>
    </nav>
  );
};

export default ResponsiveNav;
