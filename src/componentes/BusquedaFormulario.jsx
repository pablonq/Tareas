
function BusquedaFormulario({fcionBusqueda, valor}){
  return(
    <div>
      <input type="text" placeholder="Ingrese tarea" className="form-control" value={valor} onChange={()=>fcionBusqueda()} />
      
    </div>
  )
}
export default BusquedaFormulario;