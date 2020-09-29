import React from "react";
import { Link, withRouter} from 'react-router-dom';
import Navegation from "../components/Navegation"


import { Breadcrumb } from "/assets/Breadcrumb";
import { Button } from "/assets/Button";
import { Button2 } from "/assets/Button2";
import { Button3 } from "/assets/Button3";

export const Inicios = () => {
  return (
    <div className="Inicio">
      
      <br />
      <center>
      <h1> Inicia sesión </h1>
      </center>
      <center>
      <h1> Rellena los datos: </h1>
      <br />
      </center>
      <Breadcrumb />
      <Button />
      <br />
      <Button2 />
      <Button3 />
    </div>
  );
};
export default Inicios;