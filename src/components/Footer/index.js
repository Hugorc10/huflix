import React from 'react';

import './styled.scss';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="./"></a>
      <p className="left-info">Teste de info</p>

      <p>
        Criado por <a href="./">Hugo Mafra</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
