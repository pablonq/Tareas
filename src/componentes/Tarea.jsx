import '../estilos/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({id, texto, completada, fcionCompletarTarea, fcionEliminarTarea }){ /* "completada" es un props para los efectos */ 
  return(
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div className='tarea-texto'
      onClick={()=> fcionCompletarTarea(id)}> {/* cuando se haga clic se llama a la funcion con  el id de la tarea */}
        {texto}
      </div>
      <div className='tarea-contenedor-iconos'
      onClick={()=>fcionEliminarTarea(id)}>
      <AiOutlineCloseCircle
      className='tarea-icono'/>

      </div>

    </div>
  );
}
export default Tarea;