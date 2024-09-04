import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/RepoList";



function App() {
  const [formVisivel, setFormVisivel] = useState(true);
  const [nameDoUsuario, setNomeDoUsuario] = useState('');

  return (
    <>
      <input placeholder="Digite seu usuario Github" type="text" onBlur={(e) => setNomeDoUsuario(e.target.value)}></input>

      {nameDoUsuario. length > 4 && (
        <>
          <Perfil nomeDoUsuario={nameDoUsuario} />
          <ReposList nomeDoUsuario={nameDoUsuario} />        
        </>
      )}

      {/* {formVisivel && (
        <Formulario />
      )}
      
      <button onClick={() => setFormVisivel(!formVisivel)} type="button">Visível?</button> */}
    </>
  )


}

export default App
