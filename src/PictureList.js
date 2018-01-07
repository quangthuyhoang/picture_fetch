import React, { Component } from 'react';
import './main.css';
import data from './data.js';
import PictureBox from './PictureBox'

class PictureList extends Component {

	randomPicPos(){
	 var imgArr = this.props.data;
	 var div_height = 250;
	 var div_width = 325;
	 var b_width = document.body.clientWidth;
	 var b_height = document.body.clientHeight;
	 console.log(b_height,b_width)
	 for(var i = 0; i < imgArr.length; i++) {
	
	 	var pos_x = (Math.random()*(b_width - div_width)).toFixed();
	 	var pos_y = (Math.random()*(b_height - div_height) + 80).toFixed();
	 	console.log(b_height,pos_x,pos_y)
	 	imgArr[i].pos = {x: pos_x, y: pos_y};
	 }
	 
	 console.log(imgArr);

	 return imgArr;
	}

	render() {
		var imgList = this.randomPicPos();


		let newList = imgList.map(picture => {
			const pStyle = {
			 position: 'absolute',
			 left: picture.pos.x + 'px',
			 top: picture.pos.y + 'px',
			 border: '1px solid black',
  			 padding: '5px'
			}
			return (
				<PictureBox key={picture._id} pStyle={pStyle} imgUrl={picture.url} imgThumb={picture.thumbnail.url} description={picture.description} />
				)
		});
		// this.test();


		return (
			<div className="">
				{newList}
			</div>
			)
	}
}

export default PictureList;