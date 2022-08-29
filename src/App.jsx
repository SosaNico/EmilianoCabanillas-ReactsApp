import './App.css';
import NavBar from './Componentes/NavBar';
import Cards from './Componentes/Cards';
import Contador from './Componentes/Contador';
import Footer from './Componentes/Footer';

function App() {
  
  return (
      <div className='App'>
          <NavBar/>
          <Cards saludo={"Bienvenido a El Señor del Anillo"}/>
          {/* <Contador/> */}
          <Footer/>
      </div>
  );
}

export default App;
