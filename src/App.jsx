import { useState } from "react"
import { Perfil } from "./components/Perfil"
import { ReposList } from "./components/ReposList"

function App() {
  const [nomeUsuario, setNomeUsuario] = useState("")

  return (
    <>
      <input
        className="inputUsuario"
        type="text"
        onBlur={(e) => {
          setNomeUsuario(e.target.value)
        }}
      />
      {nomeUsuario.length > 0 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </>
  )
}

export default App
