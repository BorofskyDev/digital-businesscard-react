import React from 'react';
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer footer__icon">
      <a href="" className="footer__link">
        <FaTwitterSquare className="twitter footer__icon" />
      </a>
      <a href="" className="footer__link">
        <FaFacebookSquare className="facebook footer__icon" />
      </a>
      <a href="" className="footer__link">
        <FaInstagramSquare className="instagram footer__icon" />
      </a>
      <a href="" className="footer__link">
        <FaGithubSquare className="github footer__icon" />
      </a>
    </footer>
  );
}

export default Footer;
