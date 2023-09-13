import "./App.css";
import freeCodeCampLogo from "./imagenes/FreeCodeCamp_logo.png";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import { useState } from "react";

function App() {
  const [numClicks, setNumClick] = useState(0);

  const manejarClick = () => {
    setNumClick(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClick(0);
  };

  return (
    <div className="App">
      <div className="freeCodeCamp-logo-contenedor">
        <img
          className="freeCodeCamp-logo"
          alt="logo freeCodeCamp"
          src={freeCodeCampLogo}
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClicks={numClicks} />
        <Boton
          texto="Click"
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
