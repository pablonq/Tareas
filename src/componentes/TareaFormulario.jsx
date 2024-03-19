import '../estilos/TareaFormulario.css';
function TareaFormulario (props){
  return(
    <form className='tarea-formulario'>
      <input className='tarea-input'
      placeholder='Ingrese la tarea'
      type='text'
      name='texto' />
      <button className='tarea-boton'>
        Agregar  Tarea
      </button>

      
    </form>
  );
}
export default TareaFormulario;