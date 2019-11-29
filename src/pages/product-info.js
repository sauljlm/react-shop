import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '../components/header';
import { push } from '../actions/index';

export default (props) => {
  const dispatch = useDispatch();
  const data = props.location.cardData;

  const [currentImage, setCurrentImage] = useState(0);
  const [sizeSelected, setCurrentSize] = useState(0);
  const [showModal, modalAction] = useState(false);

  function modal() {
    return (
      <div className="modal-container">
        <div className="modal">
          <div className="modal__head">
            <h4 className="modal__title">Added to cart</h4>
            <button 
              onClick={() => modalAction(!showModal)}
              className="modal__btn-close"
              style={{backgroundImage: `url('static/close.png')` }}
            />
          </div>
          <div className="modal__products">
            <div className="modal__product">
              <div className="modal__product-image" style={{backgroundImage: `url(${data.image[0]})` }}></div>
              <div className="modal__product-cont-info">
                <p className="modal__product-title">{data.title}</p>
                <p className="modal__product-category">{data.category}</p>
                <p className="modal__product-size">{`Size ${data.size}`}</p>
                <p className="modal__product-price">{`$ ${data.price}`}</p>
              </div>
            </div>
          </div>
          <div className="modal__buttons">
            <Link className="modal__btn modal__btn-cart" to="/shopping-car" title="link to shopping cart" >
              <button>View Cart</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  function addToCart() {
    let currentProduct = data;
    currentProduct.size = data.availableSizes[sizeSelected];

    dispatch(push(currentProduct));
    modalAction(!showModal);
  }

  function newId() {
		return Math.floor(Math.random() * (1 - 1000 + 1) ) + 1;
  }
  
  return (
    <div className="container">
      <Header key={`header-${newId()}`}/>
      <div className="content">
        <div className="product-info">
          <div className="product-info__left">
            <div 
              className="product-info__image" 
              style={{backgroundImage: `url(${data.image[currentImage]})` }}
            />
          </div>
          <div className="product-info__right">
            <div className="product-info__desc-top">
              <p className="product-info__category">Men's Running Shoe</p>
              <p className="product-info__price">{`$${data.price}`}</p>
            </div>
            <h2 className="product-info__title">{data.title}</h2>
            <div className="slider">
              <ul className="slider__cont">
                {
                  data.image.map((image, index) => {
                    return (
                      <li
                        className={currentImage === index ? 'slider__item slider__item--active' :  'slider__item'}
                      >
                        <button 
                          style={{backgroundImage: `url(${image})` }}
                          className="slider__button"
                          onClick={() => setCurrentImage(index)}
                        />
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="sizes">
              <p className="sizes__title">Select Size</p>
              <ul className="sizes__cont">
                {
                  data.availableSizes.map((size, index) => {
                    return (
                      <li className={sizeSelected === index ? 'sizes__item sizes__item--active' :  'sizes__item'}>
                        <button 
                          className="sizes__button"
                          onClick={() => setCurrentSize(index)}
                        >{size}</button>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <button 
              className="product-info__btn-add"
              onClick={() => {addToCart()}}
            >Add to Cart</button>
            <div className="product-info__cont-desc">
              <p className="product-info__desc">{data.description}</p>
            </div>
          </div>
        </div>
        {showModal ? modal() : ""}
      </div>
    </div>
  )
}
