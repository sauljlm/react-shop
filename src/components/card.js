import React from 'react';

import { Link } from 'react-router-dom';

function Card(props) {
	
	return (
		<Link className="product" to={{ pathname: `/product-info`, cardData: props.data }}>
			<div className="product__image" style={{backgroundImage: `url(${props.image})` }}></div>
			<div className="product__cont-info">
				<p className="product__title">{props.title}</p>
				<p className="product__category">{props.category}</p>
				<p className="product__price">{`$ ${props.price}`}</p>
			</div>
		</Link>
	);
}

export default Card;
