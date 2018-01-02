import React, { Component } from 'react';
import './main.css';
import data from './data.js';
import ImageBox from './ImageBox'

class ImageList extends Component {
	
	render() {
		let imgList = this.props.data.map(picture => {
			return (
				<ImageBox  imgUrl={picture.url} imgThumb={picture.thumbnail.url} description={picture.description} />
				)
		});

		return (
			<div className="">
				{imgList}
			</div>
			)
	}
}

export default ImageList;