import React, { Component } from 'react';
import './main.css';

class ImageBox extends Component {

	render() {

		return (
			<div className="imagebox"> 
				<div className="thumbnail">
				 <img src={this.props.imgUrl} />
				</div>
				<p> image url: {this.props.imgUrl} </p>
				<p> image thumbnail: {this.props.imgThumb}</p>
				<p>{this.props.description}</p>
			</div>
		)
	}
}

export default ImageBox;