import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/Productos/ItemListContainer';
import ItemDetailsContainer from './Componentes/Details/ItemDetailsContainer';


function App() {
  
  return (
      <div className='App'>
          <NavBar/>
          <ItemListContainer saludo={"Bienvenido"}/>
          <ItemDetailsContainer/>
      </div>
  );
}

export default App;
