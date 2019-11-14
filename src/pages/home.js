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
          <div className="gallery__image gallery__image--first" style={{backgroundImage: `url('https://c.static-nike.com/a/images/w_1920,c_limit/p1xa2jlzvjmccm7firla/image.png')` }}></div>
          <div className="gallery__image gallery__image--second" style={{backgroundImage: `url('https://c.static-nike.com/a/images/w_1920,c_limit,f_auto/fncfk5vwyv7vr9mq9xhq/adapt-huarache-hyper-jadetotal-orange-release-date.jpg')` }}></div>
          <div className="gallery__image gallery__image--third" style={{backgroundImage: `url('https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/pwonviretrhqgpugtk48/air-zoom-pegasus-36-mens-running-shoe-D24Mcz.jpg')` }}></div>
        </div>
      </div>
    )
  }
}
