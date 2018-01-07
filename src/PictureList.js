import React, { Component } from 'react';
import './main.css';
import data from './data.js';
import PictureBox from './PictureBox'

class PictureList extends Component {
	
	render() {
		let imgList = this.props.data.map(picture => {
			return (
				<PictureBox key={picture._id} imgUrl={picture.url} imgThumb={picture.thumbnail.url} description={picture.description} />
				)
		});

		return (
			<div className="">
				{imgList}
			</div>
			)
	}
}

export default PictureList;