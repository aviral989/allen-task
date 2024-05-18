import React, { useContext } from 'react';
import { Menu, Badge } from 'antd';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { CartContext } from '../../contexts/CartContext';

const Header = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Menu theme="dark" mode="horizontal" selectable={false}>
      <Menu.Item key="1">
        <Link to="/">Allen Products</Link>
      </Menu.Item>
      <Menu.Item key="2" style={{ marginLeft: 'auto' }}>
        <Link to="/cart">
          <Badge style={{ marginTop:'20px'  }} count={totalItems} showZero>
            <ShoppingCartOutlined style={{ fontSize: '24px', marginTop:'20px' , color: '#fff' }} />
          </Badge>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
