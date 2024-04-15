import '../estilos/TareaFormulario.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
function TareaFormulario(props) {

  const [input, setInput] = useState(''); /* useState pasa como valor inicial una cadena vacia */

  const manejarEnvio = e => {
    e.preventDefault(); /* evita que la aplicacion se vuelva a cargar*/
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva); /*cuando se envie el formulario pasa la tarea nueva como argumento  al padre (componenteTareaFormulario)*/
    /* setInput(''); */
  }

  const manejarCambio = e => {
    setInput(e.target.value);/*estoy asignando, "e.target.value" Extrae el valor del campo de texto */
  }

  return (
    <form className='tarea-formulario'
      onSubmit={manejarEnvio}>
      <input className='tarea-input'
        placeholder='Ingrese la tarea'
        type='text'
        name='texto'
        onChange={manejarCambio} /> {/* evetlistener  para capturar el cambio de input */}
      <button className='tarea-boton'>
        Agregar  Tarea
      </button>


    </form>
  );
}
export default TareaFormulario;