'use client'
import React, { useEffect, useState } from 'react';
import facebookImage from './Imagenes/facebook.png';
import whatsappImage from './Imagenes/whatsapp.png';
import instagramImage from './Imagenes/instagram.png';
import gmailImage from './Imagenes/gmail.png';
import pacmanEating from './Imagenes/pacman-eating-dots.gif';

const footerStyles = {
  fontFamily: 'poppins',
  fontColor: 'white',
  position: 'relative',
  bottom: 0,
  width: '100%',
  display: 'flex',
  color: 'white',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px',
  transition: 'transform 0.3s ease',
};

const buttonStyles = {
  fontFamily: 'poppins',
  fontColor:'black',
  border: 'none',
  padding: '5px',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'backgroun-color 0.9s ease',
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
  borderRadius: '20px',
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

  const agrandarImagen = (e) => {
    e.target.style.transform = 'scale(1.2)';
  }
const resetearImagen = (e) => {
  e.target.style.transform = 'scale(1)';
}
  return (
    <div>
      <footer className='bg-gray-900 backgrounColor:' style={footerStyles}>
        <button  className='bg-yellow-400 backgrounColor:'
                 style={buttonStyles}
                 onMouseEnter={agrandarImagen}
                 onMouseLeave={resetearImagen}
                 onClick={scrollToTop}
                 >
         <img src={pacmanEating} alt="pacmanEating" 
              style={{whidth: '4vw',
                    height: '4vw', }}/>
                    <b style={{color: 'black'}}><i>Inicio</i></b>
        </button>
        <p style={textStyle}>
          <h2 style={{fontSize: '3vw'}} ><b> Agradecemos que hayas llegado hasta aquí. </b></h2>
          <br />
          <b style={{fontSize: '2vw'}}><i>No dudes en contactarnos...</i></b>
        </p>
        <div style={logoTipos}>
          <img
            style={logoTiposImg} 
            src={facebookImage}
            alt="facebook.png"
            onMouseEnter={agrandarImagen}
            onMouseLeave={resetearImagen}
            onClick={openFacebook}
          />
          <img
            style={logoTiposImg}
            src={whatsappImage}
            alt="whatsapp.png"
            onMouseEnter={agrandarImagen}
            onMouseLeave={resetearImagen}
            onClick={openWhatsApp}
          />
          <img
            style={logoTiposImg}
            src={instagramImage}
            alt="instagram.png"
            onMouseEnter={agrandarImagen}
            onMouseLeave={resetearImagen}
            onClick={openInstagram}
          />
          <img
            style={logoTiposImg}
            src={gmailImage}
            alt="gmail.png"
            onMouseEnter={agrandarImagen}
            onMouseLeave={resetearImagen}
            onClick={openGmail}
          />
        </div>
      </footer>
    </div>
  );
};

export default Footer;