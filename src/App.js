import Logo from './imagenes/logo.png';
import './App.css';
import ComponenteTareaFormulario from './componentes/ComponenteTareaFormulario';





function App() {
 

  return (
    <div className="tareas">
      <div className='logo-contenedor'>
        <img src={Logo}
        className='logo'
        alt='logo'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
       
      <ComponenteTareaFormulario />
      </div>
      
    </div>
  );
}

export default App;
