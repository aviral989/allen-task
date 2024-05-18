import React, { useEffect, useState, useContext } from 'react';
import { Card, Button, Row, Col, Carousel, Tag } from 'antd';
import axios from 'axios';
import { HeartOutlined } from '@ant-design/icons';
import './ProductList.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { CartContext } from '../contexts/CartContext';

const dummyImage = 'https://via.placeholder.com/200';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className='product-list__container'>
                    {console.log("workibg")}

          <Row gutter={[16, 16]}>
      {products.map(product => (
        <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
          <Card className="product-card">
            <div className="card-header">
              <Tag color="purple">NEW</Tag>
              <HeartOutlined className="heart-icon" />
            </div>
            <Carousel autoplay>
              {(product.images && product.images.length > 0 ? product.images : [dummyImage]).map((image, index) => (
                <div key={index}>
                  <img alt={product.title} src={image} className="product-image" />
                </div>
              ))}
            </Carousel>
            <div className='product-details' >
            <div className="product-title">{product.title}</div>

                <div className='product-bottom'>
                    <div>
                    <div className="product-price-heading"> Price</div>
            <div className="product-price"> ${product.price} { (product.discountPercentage && product.discountPercentage === product.price) ? <span className="product-price-old">  ${product.price*(1-(product.discountPercentage/100))}  </span>: <span />}</div>
                    </div>
          
            <Button type="primary" onClick={() => addToCart(product)} className="add-to-cart-button"><ShoppingCartOutlined /></Button>
            </div>
           

            </div>
                
        
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  
  );
};

export default ProductList;
