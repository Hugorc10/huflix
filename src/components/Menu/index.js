import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/img/Logo.png";
import { LogoImage, MenuWrapper } from "./styled";
import Button from "../Button/styles";

function Menu() {
  return (
    <MenuWrapper>
      <Link to="/">
        <LogoImage className="Logo" src={Logo} alt="Huflix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </MenuWrapper>
  );
}

export default Menu;
