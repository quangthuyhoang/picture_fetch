import React, { Component } from 'react';
import './main.css';

class ImageBox extends Component {
	addDefaultSrc(e){
  	 e.target.src = 'http://images.tritondigitalcms.com/6616/sites/115/2017/12/08073633/PB1201_STORY_CARO-Authority-HealthyOutside-DOG-20160818.jpeg'
	}

	render() {

		return (
			<div className="imagebox" > 
				<div className="thumbnail">
				 <img onError={this.addDefaultSrc} src={this.props.imgUrl} alt="broken image"/>
				</div>
				<p> image url: {this.props.imgUrl} </p>
				<p> image thumbnail: {this.props.imgThumb}</p>
				<p>{this.props.description}</p>
			</div>
		)
	}
}

export default ImageBox;