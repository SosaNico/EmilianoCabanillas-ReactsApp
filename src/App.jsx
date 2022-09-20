import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/Productos/ItemListContainer';
import ItemDetailsContainer from './Componentes/Details/ItemDetailsContainer';
import Home from './Componentes/Home/Home';
import { CartProvider } from './Componentes/Context/CartContext';
import Cart from './Componentes/Cart/Cart';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/categoria/' element={<ItemListContainer />} />
            <Route path='/categoria/:category' element={<ItemListContainer />} />
            <Route path='/detalles/:id' element={<ItemDetailsContainer />} />
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
