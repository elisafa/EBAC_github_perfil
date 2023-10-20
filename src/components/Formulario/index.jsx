import { useState, useEffect } from "react"

export const Formulario = () => {
  const [materiaA, setMateriaA] = useState(0)
  const [materiaB, setMateriaB] = useState(0)
  const [materiaC, setMateriaC] = useState(0)
  const [nome, setNome] = useState("")

  useEffect(() => {
    console.log("O componente iniciou")
    return () => {
      console.log("o componente finalizou")
    }
  }, [])
  useEffect(() => {
    // console.log("O estado mudou")
  }, [nome])

  useEffect(() => {
    // console.log("materiaA mudou para" + materiaA)
  }, [materiaA])

  const alterarNome = (evento) => {
    setNome(evento.target.value)
  }

  const renderizaResultado = () => {
    const soma = materiaA + materiaB + materiaC
    const media = soma / 3

    if (media >= 7) {
      return <p>Olá {nome}, Você foi aprovado com sucesso!!</p>
    } else {
      return <p>Olá {nome}, Você precisa estudar mais um pouco!!</p>
    }
  }

  return (
    <form>
      <ul>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input type="text" placeholder="Seu nome" onChange={alterarNome} />
      <input
        onChange={(evento) => setMateriaA(parseInt(evento.target.value))}
        type="number"
        placeholder="Nota matéria A"
      />
      <input
        onChange={(evento) => setMateriaB(parseInt(evento.target.value))}
        type="number"
        placeholder="Nota matéria B"
      />
      <input
        onChange={(evento) => setMateriaC(parseInt(evento.target.value))}
        type="number"
        placeholder="Nota matéria C"
      />
      {renderizaResultado()}
    </form>
  )
}
