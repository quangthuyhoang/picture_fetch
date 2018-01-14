import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import data from './data.js';
import PictureBox from './PictureBox'

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
};



class PictureList extends Component {

	// randomPicPos(){
	//  var imgArr = this.props.data;
	//  const div_height = 250;
	//  const div_width = 325;
	//  const b_width = document.body.clientWidth;
	//  const b_height = document.body.clientHeight;

	//  for(var i = 0; i < imgArr.length; i++) {
	
	//  	var pos_x = (Math.random()*(b_width - div_width)).toFixed();
	//  	var pos_y = (Math.random()*(b_height - div_height) + 80).toFixed();

	//  	imgArr[i].pos = {x: pos_x, y: pos_y};
	//  	imgArr[i].class = "PictureBox nodisplay";
	//  }

	//  return imgArr;
	// }



	render() {

		// var imgList = this.props.data.length > 4 ? this.props.data : this.randomPicPos();

		
		var imgList = this.props.data;

		console.log("test",this.props.data)
		let newList = imgList.map((picture, i) => {
			const pStyle = {
			 position: 'absolute',
			 left: picture.pos.x + 'px',
			 top: picture.pos.y + 'px',
			 border: '1px solid black',
  			 padding: '5px',
  			 backgroundColor: 'white',
  			 // display: 'none',
			}
		
			return (
				<PictureBox refID={picture._id} key={i} pStyle={pStyle} imgUrl={picture.url}
				 imgThumb={picture.thumbnail.url} display={picture.class}/>
				)
		});

		console.log(newList)
		// this.test();

		return (
			<div id="imgList">
				{newList}
			</div>
			)
		

	}
}

export default PictureList;

// return (
// 			<div className="">
// 				{newList}
// 			</div>
// 			)