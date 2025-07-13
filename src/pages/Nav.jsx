import React, { useState, useRef, useEffect} from 'react';
import './ResponsiveNav.css';
import { Link, useLocation, useNavigate } from "react-router-dom";

const ResponsiveNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (targetId) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      // Navigate to home first, then scroll after short delay
      navigate("/", { replace: false });

      // Scroll after a delay to allow DOM to render
      setTimeout(() => {
        const target = document.getElementById(targetId);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }, 100); // 100–300ms usually works
    } else {
      // Already on home page
      const target = document.getElementById(targetId);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <li><button onClick={() => handleAnchorClick("maternity")}>maternity</button></li>
        <li><button onClick={() => handleAnchorClick("lifestyle")}>lifestyle</button></li>
        <li><button onClick={() => handleAnchorClick("weddings_elopements")}>weddings & elopements</button></li>
        <li>
        <button className="nav-link" onClick={() => { handleLinkClick(); navigate("/contact"); }}>
          contact
        </button>
</li>
      </ul>
      </div>
    </nav>
  );
};

export default ResponsiveNav;
