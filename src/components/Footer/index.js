import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={Logo} alt="LeoLeo Logo"/>
      </a>
      <p>
      Orgulhosamente criado durante a Imersão React da Alura
      </p>
    </FooterBase>
  );
}

export default Footer;
