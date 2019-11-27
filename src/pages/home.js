import React from 'react';

import Header from '../components/header';

export default class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
      url : './data.json',
      data : JSON.parse(localStorage.getItem('data'))
    }
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="gallery">
          <div className="gallery__image gallery__image--left" style={{backgroundImage: `url('https://c.static-nike.com/a/images/w_1920,c_limit/p1xa2jlzvjmccm7firla/image.png')` }}></div>
          <div className="gallery__image gallery__image--right"></div>
        </div>
      </div>
    )
  }
}
