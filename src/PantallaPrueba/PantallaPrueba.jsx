import MenuAppBar from "../componentes/MenuAppBar";
import React, { useEffect } from "react";
import Formulario from "../componentes/Formulario";
import useFetch from "react-fetch-hook"; //debemos correr: pm i react-fetch-hook
import Divider from "@mui/material/Divider";
import Enlaces from "../urls";
export default function Pantalla() {
  const enlace = Enlaces();

  const url = enlace.urlAdministrador;
  const { isLoading, data, error } = useFetch(url);

  const fetchApi = async () => {
    const respuesta = await fetch(url);

    if (respuesta.status === 200) {
      const datos = await respuesta.text();
      console.log(datos);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <MenuAppBar />

      <h1>API Posts</h1>
      {isLoading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ idUsuario, nombre, apellido, codigoPUCP, correo }) => (
            <li key={idUsuario}>
              <h2>ID: {idUsuario}</h2>
              <h3>
                Nombre y Apellido: {nombre} {apellido}
              </h3>
              <h3>Codigo: {codigoPUCP}</h3>
              <h3>Corre electrónico: {correo}</h3>
            </li>
          ))}
      </ul>
      <Divider />
      <Formulario />
    </div>
  );
}
