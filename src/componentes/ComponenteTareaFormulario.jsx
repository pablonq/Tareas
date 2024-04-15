import Tarea from "./Tarea";
import TareaFormulario from "./TareaFormulario";
import '../estilos/ComponenteTareaFormulario.css';
import { useState } from "react";
import BusquedaFormulario from "./BusquedaFormulario";

function ComponenteTareaFormulario() {

  const [tareas, setTareas] = useState([]);

  const [completada, setCompletada] = useState(0);

  const [search, setSearch] = useState("");

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) { /* para verificar que la cadena no esté vacia, quita el espacio a inicio y al final */
      tarea.texto = tarea.texto.trim(); /* le quito los espacios antes y despues de la cadena */
      const tareaActualizada = [tarea, ...tareas]; /* Agrega al principo "tarea" y luego todas las anteriores */
      setTareas(tareaActualizada);
    }


  }

  const eliminarTarea = id => {
    const tareaActulizada = tareas.filter(tarea => tarea.id !== id); /* filtro con la condicion "tarea => tarea.id !== id" */
    setTareas(tareaActulizada);
  }

  const completarTarea = id => {
    const tareaActualizada = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
        setCompletada(completada + 1);
      }
      return tarea;
    });
    setTareas(tareaActualizada);
  }

  const cantidadTareas = tareas.length;

  const fcionBusqueda = (event) => {
    setSearch(event.target.value);
  }

  const results = !search ? tareas : tareas.filter((tarea) => tarea.texto.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <> {/* etiquetas vacias (fragmentos), se utilizan cuando no necesitamos un div con un proposito */}
      <div className="div">
        <h3>Cantidad de Tareas: {cantidadTareas}</h3>
      </div>
      <div className="div">
        <h3>Tareas Completadas: {completada}</h3>
      </div>

      <TareaFormulario
        onSubmit={agregarTarea} /> {/* Estoy pasando un props (onSubmit). Cuando se envie el formulario va a llamar a la fcion "agregarTarea" */}

      <BusquedaFormulario
        value={search}
        onChange={fcionBusqueda} />

      <div className="tareas-lista-contenedor">
        {
          results.map((tarea) => ( /* map toma cada una de "tareas"  y la pasa como argumento (tarea), cada "tarea" se va a representar como un objeto en el arreglo o sea va crear un componente "Tarea"*/
            <Tarea
              key={tarea.id} /* Es para que react  pueda identificar las tareas individualmente y es unico */
              texto={tarea.texto}
              id={tarea.id}
              completada={tarea.completada}
              fcionCompletarTarea={completarTarea}
              fcionEliminarTarea={eliminarTarea} />
          )
          )
        }
      </div>
    </>

  );
}
export default ComponenteTareaFormulario;