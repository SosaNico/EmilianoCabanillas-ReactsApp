import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/Productos/ItemListContainer';
import ItemDetailsContainer from './Componentes/Details/ItemDetailsContainer';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:category' element={<ItemListContainer />} />
          <Route path='/detalles/:id' element={<ItemDetailsContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
