import React from 'react';

import { useSelector } from 'react-redux';

import Header from '../components/header';
import Card from '../components/card';

export default (props) => {
  const products = useSelector(state => state.products);

  function newCard(element, cards) {
		cards.push(
			<Card
        key={element.id}
        id ={element.id} 

        data={element}
        image={element.image[0]}
        title={element.title}
        category={element.category}
        price={element.price}
      />
		);
  }

  function getElements() {
    let cards = [];
    const currentCategory = props.location.pathname.replace("/", "");
    products.shoes.map((element) => {
      if(currentCategory === element.category) {
        newCard(element, cards);
      }
    });

    return cards;
  }

  let component = getElements();

  return (
    <div className="container">
      <Header />
      <div className="content">
        <div className="cont-products">{component}</div>
      </div> 
    </div>
  )
}
