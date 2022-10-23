import React from 'react';
import photo from '../assets/me1.jpg';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

function Header() {
  return (
    <div className="header">
      <img src={photo} alt="" className="header__img" />
      <h1 className="header__title">Joel Borofsky</h1>
      <p className="header__subtitle">Frontend Developer</p>
      <a href="" className="header__website-link">
        joelborofsky.com
      </a>
      <div className="header__btns">
        <a href="#" className="header__email header__btn">
          <MdEmail className='header__icon'/>
          Email
        </a>
        <a href="#" className="header__social-media header__btn">
          <FaLinkedin className='header__icon' />
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Header;
