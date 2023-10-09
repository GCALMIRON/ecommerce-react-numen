'use client'
import React, { useEffect, useState } from 'react';
import facebookImage from './Imagenes/facebook.png';
import whatsappImage from './Imagenes/whatsapp.png';
import instagramImage from './Imagenes/instagram.png';
import gmailImage from './Imagenes/gmail.png';

const footerStyles = {
  fontFamily: 'poppins',
  fontColor: 'white',
  position: 'fixed',
  bottom: 0,
  width: '100%',
  display: 'flex',
  color: 'white',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  transition: 'transform 0.3s ease',
};

const buttonStyles = {
  fontFamily: 'poppins',
  color: 'black',
  border: 'none',
  padding: '5px',
  borderRadius: '5px',
  cursor: 'pointer',
};

const logoTipos = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '10px',
};

const logoTiposImg = {
  width: '4vw',
  height: '4vw',
  cursor: 'pointer',
};

const textStyle = {
    color: 'white',
    transition: 'color 0.9s',
}

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const openFacebook = () => {
    window.open('https://www.facebook.com', '_blank');
  };

  const openWhatsApp = () => {
    window.open('https://web.whatsapp.com', '_blank');
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com', '_blank');
  };

  const openGmail = () => {
    window.open('https://mail.google.com', '_blank');
  };

  return (
    <div>
      <br /> <br /> <br /> <br />
      <p>
        
      </p>
      <footer className='backgraounColor: bg-gray-900' style={footerStyles}>
        <button className='backgraunColor: bg-yellow-400' style={buttonStyles} onClick={scrollToTop}>
          Inicio
        </button>
        <p style={textStyle}>
          Agradecemos que hayas llegado hasta aquí.
          <br />
          No dudes en contactarnos...
        </p>
        <div style={logoTipos}>
          <img
            style={logoTiposImg}
            src={facebookImage}
            alt="facebook.png"
            onClick={openFacebook}
          />
          <img
            style={logoTiposImg}
            src={whatsappImage}
            alt="whatsapp.png"
            onClick={openWhatsApp}
          />
          <img
            style={logoTiposImg}
            src={instagramImage}
            alt="instagram.png"
            onClick={openInstagram}
          />
          <img
            style={logoTiposImg}
            src={gmailImage}
            alt="gmail.png"
            onClick={openGmail}
          />
        </div>
      </footer>
    </div>
  );
};

export default Footer;