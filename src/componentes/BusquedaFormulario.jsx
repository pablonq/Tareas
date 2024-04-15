import '../estilos/BusquedaFormulario.css';

function BusquedaFormulario({valor, onChange}){
  return(
    <div className='contenedorInput'>
      <input 
      type="text" 
      placeholder="Buscar Tarea" 
      className="form-control search" 
      value={valor} 
      onChange={onChange} />
      
    </div>
  );
}
export default BusquedaFormulario;