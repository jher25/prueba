import React, { Fragment, useState } from "react";
//usar hook
import useFetch from "react-fetch-hook"; //debemos correr: pm i react-fetch-hook

const Formulario = () => {
  const [datos, setDatos] = useState({
    descripcion: "",
  });

  const handleInputChange = (event) => {
    //console.log(event.target.value); //podemos observar como varia cada ves que varia el input
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    //procesar para conectar con back
    event.preventDefault();
    console.log(datos.descripcion);
  };

  const url = "http://localhost:8081/api/v1/administrador";
  const { isLoading, data, error } = useFetch(url);
  return (
    <Fragment>
      <h1>Ingreso de datos</h1>
      <h3>Descripción para crear una tarea</h3>
      <form className="row" onSubmit={enviarDatos}>
        <div className="col-md-3">
          <input
            placeholder="Ingrese descripción"
            className="form-control"
            type="text"
            name="descripcion"
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="col-md-3">
          <button className="btn btn-primary" type="submit">
            + Tarea
          </button>
        </div>
      </form>

      <h3>{datos.descripcion}</h3>

      {isLoading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <h2>Consultar Administrador por ID</h2>
      <ul>
        {data &&
          data.map(({ idUsuario, nombre, apellido, codigoPUCP, correo }) => (
            <ul>
              <li key={idUsuario.toString()}>
                <h3>Codigo: {codigoPUCP}</h3>
                {nombre} {apellido}
                <h3>Corre electrónico: {correo}</h3>
              </li>
            </ul>
          ))}
      </ul>
    </Fragment>
  );
};
export default Formulario;
