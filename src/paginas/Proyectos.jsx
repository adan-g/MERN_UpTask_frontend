import { useEffect } from "react"
import useProyectos from "../hooks/useProyectos"
import PreviewProyecto from "../componentes/PreviewProyecto"
import Alerta from "../componentes/Alerta"

const Proyectos = () => {
  const { proyectos, alerta } = useProyectos()

  const { msg } = alerta

  return (
    <>
      <h1 className="text-4xl font-black">Poryectos</h1>

      {msg && <Alerta alerta={alerta} />}

      <div className="bg-white shadow mt-10 rounded-lg">
        {proyectos.length ?
          proyectos.map(proyecto => (
            <PreviewProyecto
              key={proyecto._id}
              proyecto={proyecto}
            />
          ))
          : <p className="text-center text-gray-600 uppercase p-5">NO hay proyectos</p>}
      </div>
    </>
  )
}

export default Proyectos