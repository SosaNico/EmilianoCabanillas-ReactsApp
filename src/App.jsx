import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/Productos/ItemListContainer';
import ItemDetailsContainer from './Componentes/Details/ItemDetailsContainer';
import { CartProvider } from './Componentes/Context/CartContext';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:category' element={<ItemListContainer />} />
            <Route path='/detalles/:id' element={<ItemDetailsContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
