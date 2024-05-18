import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { CartProvider } from './contexts/CartContext';
// import 'antd/dist/antd.css';
import './App.css';

const { Content } = Layout;

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout className="layout">

          <Header />

          <Content className='main-layout' >

            <div className="site-layout-content">
              <Routes>

                <Route path="/" exact element={<ProductList />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
