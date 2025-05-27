import "./TarjetaImagenBotonPanel.css";
import { TarjetaImagenBoton } from './TarjetaImagenBoton.jsx';


export function TarjetaImagenBotonPanel({datosTarjetas = []}) {
    
    return (
    <section className="tarjetaimagenboton-panel">
        {
            datosTarjetas.map(datoTarjeta => {
                return <TarjetaImagenBoton key={datoTarjeta.id} titulo={datoTarjeta.titulo} descripcion={datoTarjeta.descripcion} tipoVista={datoTarjeta.tipoVista} origenVista={datoTarjeta.origenVista} tipoPath={datoTarjeta.tipoPath} path={datoTarjeta.path}></TarjetaImagenBoton>
            })
        }

        
    </section>
  )
}

