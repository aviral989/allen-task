import React, { useContext } from 'react';
import { List, Button } from 'antd';
import {INR_FORMAT} from '../constant'
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>
      <List
        itemLayout="horizontal"
        dataSource={cart}
        renderItem={item => (
          <List.Item
            actions={[
              <Button onClick={() => decrementQuantity(item.id)}>-</Button>,
              <span>{item.quantity}</span>,
              <Button onClick={() => incrementQuantity(item.id)}>+</Button>
            ]}
          >
            <List.Item.Meta
              title={item.title}
              description={`${INR_FORMAT.format(item.price)}`}
            />
            <div>
              {INR_FORMAT.format(item.price * item.quantity)}
            </div>
          </List.Item>
        )}
      />
      <h3>Total: {INR_FORMAT.format(total)}</h3>
    </div>
  );
};

export default Cart;
