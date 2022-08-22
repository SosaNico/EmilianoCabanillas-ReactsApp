import './App.css';
import NavBar from './Componentes/NavBar';
import ItemListContainer from './Componentes/ItemListContainer';

function App() {
  
  return (
      <div className='app'>
          <NavBar/>
          <ItemListContainer saludo={"Bienvenido a PokeMerch"}/>
      </div>
  );
}

export default App;
