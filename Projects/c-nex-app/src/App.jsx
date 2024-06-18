import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Products from './Components/Products/Products';
import  Inventory  from './Components/Inventory';
import Categories from './Components/Products/Categories';
import Variations from './Components/Products/Variations';
import Collections from './Components/Products/Collections';

function App() {
  return (
      <Routes>
        <Route element={<Layout />}>
        {/* Default route */}
          <Route path="/" element={<div>Welcome to Cnex Admin DashBoard</div>} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/variations" element={<Variations />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/inventory" element={<Inventory />} />
          {/* Add more routes here */}
        </Route>
      </Routes>
  );
}

export default App;
