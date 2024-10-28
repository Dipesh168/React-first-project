import React from "react";
import "./Footer.css"; // Optional: Add your CSS file for styling

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Brief information about the Mr dipesh travel company.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>Email: dgdipesh@gmail.com</p>
          <p>Phone: ***</p>
          <p>Address: 123 Travel St, Nepal</p>
        </div>
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service">Terms of Service</a>
            </li>
            <li>
              <a href="/faqs">FAQs</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="https://facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://instagram.com">Instagram</a>
            </li>
            <li>
              <a href="https:/t/gihub.com/Dipesh168">GitHub</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Newsletter Signup</h3>
          <form>
            <input type="email" placeholder="Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-section">
          <h3>Popular Destinations</h3>
          <ul>
            <li>
              <a href="/destination1">Destination 1</a>
            </li>
            <li>
              <a href="/destination2">Destination 2</a>
            </li>
            <li>
              <a href="/destination3">Destination 3</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Customer Service</h3>
          <a href="/support">Support Center</a>
        </div>
        <div className="footer-section">
          <h3>Travel Resources</h3>
          <a href="/resources">Travel Guides</a>
        </div>
        <div className="footer-section">
          <h3>Sitemap</h3>
          <a href="https:/t/gihub.com/Dipesh168">Sitemap</a>
        </div>
        <div className="footer-section">
          <p>&copy; 2024 Travel All rights reserved.</p>
          <p>Founder by Mr Dipesh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
