import Logo from '../../imagenes/logo.png';
import './Home.css';
import ComponenteTareaFormulario from '../../Components/ComponenteTareaFormlario/ComponenteTareaFormulario.jsx';
import Titulo from '../../Components/Titulo/Titulo.jsx';





function Home() {


  return (
    <div className="tareas">
      <div className='logo-contenedor'>
        <img src={Logo}
          className='logo'
          alt='logo'
        />
      </div>
      <div className='tareas-lista-principal'>
        <Titulo Titulo="Mis Tareas" />
        <ComponenteTareaFormulario />
      </div>

    </div>
  );
}

export default Home;