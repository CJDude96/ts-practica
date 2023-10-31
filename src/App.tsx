import Funciones from "./typescript/Funciones";
import ObjetosLiterales from "./typescript/ObjetosLiterales";
import TiposBasicos from "./typescript/TiposBasicos";
import Contador from "./components/Contador";
import ContadorHook from "./components/ContadorHook";
import Login from "./components/Login";

import Formularios from "./components/Formularios";

import Usuarios from "./components/Usuarios";

const App = () => {
  return (
    <div className="mt-2">
      <h1 className="display-5">Practica de TypeScript</h1>

      <hr className="my-4" />
      <TiposBasicos />

      <hr className="my-4" />
      <ObjetosLiterales />

      <hr className="my-4" />
      <Funciones />

      <hr className="my-4" />
      <Contador />

      <hr className="my-4" />
      <ContadorHook />

      <hr className="my-4" />
      <Login />

      <hr className="my-4" />
      <Usuarios />

      <hr className="my-4" />
      <Formularios />
    </div>
  );
};

export default App;
