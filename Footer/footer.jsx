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
      <br /> <br /> <br /> <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maiores nobis tempora expedita impedit voluptatem fugiat quam esse quos ullam, molestias sapiente ad aperiam repudiandae quo est, quod eveniet blanditiis atque totam possimus dignissimos itaque eum voluptate! Iure inventore laboriosam facilis velit dolore in rerum corporis quasi esse fugiat architecto, consequatur culpa quam magnam illo natus eius. Corporis ipsam adipisci nam non provident dolor, expedita enim totam quis! Dignissimos totam necessitatibus tempore iste voluptates quisquam magnam libero enim, animi, vitae nisi odio praesentium, nam dolorem culpa omnis! Ducimus nisi aspernatur corporis debitis ipsum earum iure corrupti cum, saepe id laudantium consectetur eaque porro itaque recusandae esse neque necessitatibus pariatur. Corporis provident ad sit nihil iure, libero repellat tempore consequatur blanditiis voluptatum ipsum sint mollitia voluptates quis non obcaecati at repellendus error incidunt? Quidem reiciendis culpa ipsum sunt quam vitae ducimus error officia, soluta nemo, est eum! Inventore recusandae, dolores qui rem veniam eligendi voluptates debitis itaque, minima at iure error beatae natus eius. Magni provident cum architecto, vitae voluptate porro maxime ratione! At corrupti incidunt delectus dolore, quidem laboriosam ipsum in, labore cum fugit tempora, obcaecati blanditiis suscipit dolorem earum assumenda corporis magni fugiat. Nemo repudiandae iste possimus consectetur, temporibus laborum explicabo nulla quae velit, officiis vitae, soluta veniam ducimus quasi? At repudiandae quibusdam itaque porro dicta voluptas et ea soluta ad illo aliquam cum, neque, delectus, aliquid libero adipisci animi atque velit molestias maiores praesentium eius dignissimos dolorum. Laborum, hic assumenda minima et pariatur mollitia iste fugit delectus. Esse eos adipisci vitae non eum consequatur laboriosam beatae quas assumenda laudantium, debitis voluptates, voluptas, molestiae quod sequi culpa rem iure illo fuga molestias accusamus? Consectetur, dolorem repellat architecto, excepturi blanditiis nisi neque obcaecati sunt aut assumenda sit praesentium. Ad odit totam vitae sit voluptatum? Similique repellendus sapiente quidem cum ipsa beatae quia laborum illo ut culpa dicta veritatis, corporis fuga! Labore perspiciatis earum debitis dolor ducimus commodi ut, quas voluptas ipsum vel adipisci itaque necessitatibus blanditiis laudantium enim. Quia expedita consequuntur similique cumque incidunt itaque commodi. Alias obcaecati accusantium voluptatibus vel qui vitae enim quo repellendus nostrum cum! Aut consectetur cum a nisi inventore laboriosam, quo similique possimus harum error ipsa non exercitationem voluptatum ex architecto expedita voluptas saepe illo qui facilis accusantium. Omnis iure eligendi aperiam. Reprehenderit, recusandae sint consectetur totam ratione assumenda cupiditate provident voluptatibus, vero laboriosam minima sed culpa eveniet quod, quisquam odio! Cum dolores maiores consequatur temporibus delectus deserunt repudiandae id ullam consectetur omnis? Nulla necessitatibus excepturi commodi omnis odit hic labore ab nisi voluptatum accusamus quibusdam ipsam iure dolores sunt, earum quo aliquam provident tempora, tempore a asperiores aut. At nam, eius, vero officiis dolores debitis adipisci suscipit nulla consequatur error eligendi nisi ad earum omnis cupiditate nobis harum, a sequi provident reprehenderit quam impedit! Quas impedit est perferendis rerum ipsam explicabo illo ea quo nemo repellendus sit neque dolore consequatur soluta vel, libero nulla a. Perspiciatis at esse sed minus maxime iusto eum sit cumque sapiente ad, ratione maiores perferendis error cum quaerat, similique quibusdam ex unde! Expedita illo amet vitae quod eum perspiciatis optio esse illum voluptas! Provident veniam commodi labore consequuntur tempore. Cupiditate earum laudantium repudiandae quisquam quos delectus? Voluptatibus assumenda deserunt dolorem nobis architecto laudantium tempore modi, a tenetur, sapiente vero distinctio quis perspiciatis. Provident repudiandae blanditiis nobis dolor ad, sit inventore, necessitatibus reiciendis praesentium sequi sint repellat possimus ex? Aut asperiores iste aliquam reiciendis voluptate tenetur iusto suscipit! Perferendis sapiente ullam doloremque dolore amet nisi placeat voluptas voluptatum quos deleniti nam quia itaque dolor nobis illum, maiores illo pariatur excepturi error dolorum quis reprehenderit odio molestiae velit. Voluptatibus, fugiat magni voluptatum mollitia hic repudiandae, voluptates veritatis obcaecati quas expedita quos. Deleniti iusto accusamus, esse delectus facere quis praesentium cumque modi aperiam velit quam hic veritatis laudantium suscipit soluta explicabo, est cupiditate nobis consequuntur dolorem itaque repellat iure. Minus illum non itaque ab nobis doloremque exercitationem dignissimos, consequatur placeat autem dolore illo repellat! Error impedit iure porro fuga? Exercitationem, possimus aut, excepturi consequatur corrupti dicta asperiores iste reiciendis illo incidunt porro ut nihil alias obcaecati officiis optio vel cum, ea voluptates eaque tempore enim aliquam vitae? Minus laudantium, expedita dolor sunt obcaecati aut tempora sequi exercitationem et voluptatibus, illo doloribus deleniti.
      </p>
      <footer className='backgrounColor: bg-gray-900' style={footerStyles}>
        <button  className='backgrounColor: bg-yellow-400'
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