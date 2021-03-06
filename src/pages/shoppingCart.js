import React, { useState} from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { remove, drop } from '../actions/index';

import Header from '../components/header';

export default () => {
  const products = useSelector(state => state.shoppingCart);
  const dispatch = useDispatch();

  const [showModal, modalAction] = useState(false);
  const [purchaseStatus, setPurchase] = useState(false);

  let subTotal = 0;
  let shipping = 0;
  let taxes = 0;
  let total = 0;

  function setSatus() {
    const number = Math.floor((Math.random() * (2- -1))+ -1);
    if (number >= 0) {
      setPurchase(true);
    } else {
      setPurchase(false);
    }
  }

  function setPrices() {
    products.forEach((product) => {
      subTotal += product.price;
    });

    shipping = products.length * 10;
    taxes = Math.floor((subTotal + shipping) * 0.13);
    total = subTotal + shipping + taxes;
  }

  function checkout() {
    setSatus();
    setTimeout(() => {
      if (purchaseStatus === true) {
        dispatch(drop());
      }
      modalAction(!showModal);
    }, 3000);
  }
  
  function newModal() {
    return (
      <div className="modal-container">
        <div className="modal">
          <div className="modal__head">
            <button 
              onClick={() => modalAction(!showModal)}
              className="modal__btn-close"
              style={{backgroundImage: `url('static/close.png')` }}
            />
          </div>
          <div className="modal__messaje">
            <h4 className="modal__title">{purchaseStatus ? "successful payment" : "failed payment" }</h4>
          </div>
            {
              purchaseStatus ?
                <div className="modal__buttons">
                  <Link className="modal__btn" to="/" title="link to shopping cart" >
                    <button>Go to Home</button>
                  </Link>
                </div>
              :
                <div className="modal__buttons">
                  <button 
                    onClick={() => modalAction(!showModal)}
                    className="modal__btn"
                  >Cancel</button>
                  <button 
                    onClick={() => checkout()}
                    className="modal__btn"
                  >Retry</button>
                </div>
            }
        </div>
      </div>
    )
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
                    <div className="product-cart__image" style={{backgroundImage: `url(${product.image[0]})` }} />
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
              onClick={() => checkout()}
            >CHECKOUT</button>
          </div>
        </div>
        {showModal ? newModal() : ""}
      </div> 
    </div>
  )
}
