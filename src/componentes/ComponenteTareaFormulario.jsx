import Tarea from "./Tarea";
import TareaFormulario from "./TareaFormulario";
import '../estilos/ComponenteTareaFormulario.css';

function ComponenteTareaFormulario(){
  return (
    <> {/* etiquetas vacias (fragmentos), se utilizan cuando no necesitamos un div con un proposito */}
    <TareaFormulario />
    <div className="tareas-lista-contenedor">
      <Tarea 
      />
    </div>
    </>

  );
}
export default ComponenteTareaFormulario;