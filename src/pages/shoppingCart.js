import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { remove, drop } from '../actions/index';

import Header from '../components/header';

export default () => {
  const products = useSelector(state => state.shoppingCart);
  const dispatch = useDispatch();

  let subTotal = 0;
  let shipping = 0;
  let taxes = 0;
  let total = 0;

  function setPrices() {
    products.forEach((product) => {
      subTotal += product.price;
    });

    shipping = products.length * 10;
    taxes = Math.floor((subTotal + shipping) * 0.13);
    total = subTotal + shipping + taxes;
  }

  return (
    setPrices(),
    <div className="container">
      <Header />
      <div className="content">
        <div className="cont-cart">
          <ul className="product-cart">
            {
              products.map((product, index) => {
                return (
                  <li className="product-cart__item">
                    <div className="product-cart__image" style={{backgroundImage: `url(${product.image[0]})` }}></div>
                    <div className="product-cart__cont-info">
                      <p className="product-cart__title">{product.title}</p>
                      <p className="product-cart__price">{`$ ${product.price}`}</p>
                      <p className="product-cart__category">{product.category}</p>
                      <p className="product-cart__size">{`Size ${product.size}`}</p>
                      <button
                        className="product-cart__button"
                        onClick={() => dispatch(remove(index))}
                      >Remove</button>
                    </div>
                  </li>
                )
              })
            }
          </ul>
          <div className="cont-summary summary">
            <h3 className="summary__title">SUMMARY</h3>
            <div className="summary__subtotal summary__item">
              <p>Subtotal</p>
              <p>{`$${subTotal}`}</p>
            </div>
            <div className="summary__Shipping summary__item">
              <p>Estimated Shipping</p>
              <p>{`$${shipping}`}</p>
            </div>
            <div className="summary__taxes summary__item">
              <p>Taxes</p>
              <p>{`$${taxes}`}</p>
            </div>
            <div className="summary__total summary__item">
              <p>TOTAL</p>
              <p>{`$${total}`}</p>
            </div>

            <button
              className="summary__checkout"
              onClick={() => dispatch(drop())}
            >CHECKOUT</button>
          </div>
        </div>
      </div> 
    </div>
  )
}
