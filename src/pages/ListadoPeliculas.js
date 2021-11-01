import React, { useState, useEffect } from "react";
import axios from "axios";

// Importando Componentes
import Pelicula from "../components/Pelicula";
import PageWrapper from "../pages/PageWrapper";
import Paginacion from "../components/Paginacion";

function ListadoPeliculas() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);
  const TOTAL_POR_PAGINA = 4;

  useEffect(() => {
    buscarPeliculas();
  }, []);

  // Función para consultar las películas de la API
  const buscarPeliculas = async () => {
    const URL = "https://lucasmoy.dev/data/react/peliculas.json";

    let respuesta = await axios.get(URL);
    let data = await respuesta.data;

    setPeliculas(data);
  };

  // Función para obtener las películas de la página actual
  const cargarPeliculas = () => {};

  // Función para obtener el total de páginas dinámicamente
  const getTotalPagines = () => {
    let cantidadTotalDePeliculas = peliculas.length;
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
  };

  // Slice nos devuelve un arreglo, indicamos de donde a donde queremos mostrar los elementos
  /*
      Para la página 1 -> (0,5)
      Para la página 2 -> (5,10)
    */
  let peliculasPorPagina = peliculas.slice(
    (paginaActual - 1) * TOTAL_POR_PAGINA,
    paginaActual * TOTAL_POR_PAGINA
  );

  return (
    <PageWrapper>
      {peliculasPorPagina.map((pelicula) => (
        <Pelicula
          key={pelicula.titulo}
          titulo={pelicula.titulo}
          calificacion={pelicula.calificacion}
          director={pelicula.director}
          actores={pelicula.actores}
          fecha={pelicula.fecha}
          duracion={pelicula.duracion}
          img={pelicula.img}
        >
          {pelicula.descripcion}
        </Pelicula>
      ))}

      <Paginacion
        pagina={paginaActual}
        total={getTotalPagines()}
        onChange={(pagina) => setPaginaActual(pagina)}
      />
    </PageWrapper>
  );
}

export default ListadoPeliculas;
