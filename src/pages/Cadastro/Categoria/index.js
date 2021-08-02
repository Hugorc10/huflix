import React, { useState } from "react";
import { Link } from "react-router-dom";
import TemplateBase from "../../../components/PageDefault";

function CadastroCategoria() {
  // eslint-disable-next-line no-unused-vars
  const [categoryName, setCategoryName] = useState("Filmes");

  return (
    <TemplateBase>
      <h1>Cadastro categoria: {categoryName}</h1>

      <form>
        {/* State */}
        <label>
          Nome da Categoria:
          <input
            type="text"
            value={categoryName}
            onChange={function handlerFunction() {
              console.log("[categoryName]", categoryName);
            }}
          />
        </label>

        <button>Cadastrar</button>
      </form>

      <Link to="/">Ir para home</Link>
    </TemplateBase>
  );
}

export default CadastroCategoria;
