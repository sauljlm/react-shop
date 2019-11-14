import React from 'react';

import Header from '../components/header';
import Card from '../components/card';

export default class Products extends React.Component {
  constructor(props) {
		super(props);

		this.state = {
      url : './data.json',
      data : JSON.parse(localStorage.getItem('data'))
    }
  }

  newCard(element, cards) {
		cards.push(
			<Card
        key={element.id}
        id ={element.id} 

        image={element.image[0]}
        title={element.title}
        category={element.category}
        price={element.price}
      />
		);
	}

  getElements() {
    let cards = [];
    this.state.data.shoes.map((element) => {
      this.newCard(element, cards)
    });

		return cards;
  }
  
  render() {
    
    const component = this.getElements();

    return (
      <div className="container">
        <Header />
        <div className="content">
          <div className="cont-categories">

          </div>
          <div className="cont-products">{component}</div>
        </div>
      </div>
    )
  }
}
