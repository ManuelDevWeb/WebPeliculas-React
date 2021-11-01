import React from "react";

const Paginacion = ({ pagina, total, onChange }) => {

  const getPaginas = () => {
    const resultado = [];
    for (let i = 0; i < total; i++) {
      const paginaActual = i + 1;
      resultado.push(
        <a
          onClick={() => onChange(paginaActual)}
          className={pagina === paginaActual ? "active" : ""}
        >
          {paginaActual}
        </a>
      );
    }
    return resultado;
  };

  return (
    <div className="topbar-filter">
      <div className="pagination2">
        <span>
          Page {pagina} of {total}:
        </span>

        {getPaginas()}

      </div>
    </div>
  );
};

export default Paginacion;
