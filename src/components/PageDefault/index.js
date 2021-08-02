import React from "react";
import Menu from "../Menu";
import Footer from "../Footer";
import P from "prop-types";
import { Main } from "./styles";

// eslint-disable-next-line react/prop-types
function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

export default PageDefault;

PageDefault.propType = {
  children: P.object.isRequired,
};
