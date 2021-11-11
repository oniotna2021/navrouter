// import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import {db} from "./db";



import Home from "./Components/Home";
import About from "./Components/About";
import NotFound from "./Components/NotFound";
import Category from "./Components/Category";
import Products from "./Components/Products/Products";
import ProductWrap from "./Components/Products/ProductWrap";
import CrearProducto from "./Components/Products/CrearProducto";
import SpecificProduct from "./Components/Products/SpecificProduct";


function App() {
  return (
    <div className="App">
    
      <header className="App-header">
        <nav>
          <ul>
          {db[1005].productName + " " + db[1005].productId } {db[1006].productName}
            <li>              
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Products/create">Crear Producto</Link>
            </li>
          </ul>
        </nav>        
      </header>
      
           <Routes>
             <Route path='/' element={<Home />}></Route>
             <Route path='/Products' element={<ProductWrap />}>
                <Route path='/Products' element={<Products />}></Route>
                <Route path='/Products/:productId' element={<SpecificProduct />}></Route>
                <Route path='/Products/create' caseSensitive={false} element={<CrearProducto />}></Route>
             </Route>
             <Route path='/Category' element={<Category />}></Route>
             <Route path='/About' element={<About />}></Route>
             <Route path='*' element={<NotFound />}></Route>

           </Routes>
 
    </div>
  );
}

export default App;
