import { useState } from "react";
import "./BolaEnMouse.css";
import { useEffect } from "react";

export function BolaEnMouse() {
    const [enabled, setEnabled] = useState(false);
    const [position, setPosition] = useState({x: 0, y: 0});

    useEffect(() => {
        console.log("Enabled: ", enabled);

        const handleMove = (event) => {
            const {clientX, clientY } = event;

            console.log("handleMove", {clientX, clientY});
            setPosition({x: clientX, y: clientY});
        }

        if (enabled) {
            window.addEventListener("pointermove", handleMove);
        }
        
        //CleanUp
        //Esto se ejecuta en el dismounting de la componente y cada vez que cambie la dependencia
        //ANTES de ejecutar el efecto de nuevo
        return () => {
            window.removeEventListener("pointermove", handleMove);
        }
        
    }, [enabled])

    useEffect(() => {
        //Desaparece el puntero del mousse al activar el seguimiento
        document.body.classList.toggle("no-cursor", enabled);

        return () => {
            document.body.classList.remove("no-cursor");    
        }
    }, [enabled])

    return (
        <main>
            <div style={{
                position: "absolute",
                backgroundColor: "#09f",
                borderRadius: "50%",
                opacity: 0.8,
                pointerEvents: "none",
                left: -25,
                top: -25,
                width: 50,
                height: 50,
                transform: `translate(${position.x}px, ${position.y}px)`
            }}>

            </div>
            <button onClick={() => {
                let nuevoEnabled;

                nuevoEnabled = !enabled;
                setEnabled(nuevoEnabled);
            }}>{enabled ? "Desactivar" : "Activar"} seguir puntero</button>
        </main>
    )
}