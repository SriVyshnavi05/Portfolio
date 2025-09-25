import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>Passion for Technology</h2>
          <p>Innovation distinguishes between a leader and a follower.</p>
        </div>

        <div className="footer-center">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><Facebook /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><Twitter /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><Instagram /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><LinkedIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy;  Portfolio | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
