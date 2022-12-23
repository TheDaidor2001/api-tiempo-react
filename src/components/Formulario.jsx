import { useState } from "react"
import useClima from "../hooks/useClima"



export const Formulario = () => {

    const [alerta, setAlerta] = useState('')

    const {busqueda, datosBusqueda,consultarClima} = useClima()

    const {ciudad, pais} = busqueda

    const handleSubmit = (e) => {
        e.preventDefault();

        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son obligatorios')
            return
        }

        consultarClima(busqueda)
        setAlerta('')

    }



  return (
    <div className="contenedor">
        {alerta && <p>{alerta}</p>}
        <form onSubmit={handleSubmit}>
            <div className="campo">
                <label htmlFor="ciudad">Ciudad</label>
                <input
                    type="text"
                    id="ciudad"
                    name="ciudad"
                    onChange={datosBusqueda}
                    defaultValue={ciudad}
                />
            </div>
            <div className="campo">
                <label htmlFor="pais">Pais</label>
                <select 
                    id="pais"
                    name="pais"
                    onChange={datosBusqueda}
                    value={pais}
                >
                    <option value="">-- Seleccione un país --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="GQ">Guinea Ecuatorial</option>
                    <option value="ES">España</option>
                    <option value="FR">Francia</option>
                    <option value="AR">Argentina</option>
                </select>
            </div>
            <input type="submit" value="consultar clima"/>
        </form>
    </div>
  )
}
