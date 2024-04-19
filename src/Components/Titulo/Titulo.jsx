import './Titulo.css';

function Titulo(props) {
  return(
    <div  className="titulo">
      <h1>{props.Titulo}</h1>
    </div>
  );
}
export default Titulo;