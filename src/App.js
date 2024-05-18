import React, { useState, useEffect } from 'react';
import { Layout, Menu, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
// import 'antd/dist/antd.css';
import './App.css';

const { Header, Content } = Layout;

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const incrementQuantity = (productId) => {
    setCart(cart.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decrementQuantity = (productId) => {
    setCart(cart.map(item => item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item key="1">Products</Menu.Item>
          <Menu.Item key="2" style={{ marginLeft: 'auto' }}>
            <Badge count={totalItems} showZero>
              <ShoppingCartOutlined style={{ fontSize: '24px', color: '#fff' }} />
            </Badge>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: '20px' }}>
        <div className="site-layout-content">
          <ProductList addToCart={addToCart} />
          <Cart cart={cart} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
