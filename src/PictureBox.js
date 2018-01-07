import React, { Component } from 'react';
import './main.css';

class PictureBox extends Component {
	addDefaultSrc(e){
  	 e.target.src = 'http://images.tritondigitalcms.com/6616/sites/115/2017/12/08073633/PB1201_STORY_CARO-Authority-HealthyOutside-DOG-20160818.jpeg'
	}

	render() {

		return (
			<div style={this.props.pStyle}> 
				<div className="thumbnail">
				 <img onError={this.addDefaultSrc} src={this.props.imgUrl} alt="broken image"/>
				</div>
			</div>
		)
	}
}

export default PictureBox;

			// <div className="imagebox" > 
			// 	<div className="thumbnail">
			// 	 <img onError={this.addDefaultSrc} src={this.props.imgUrl} alt="broken image"/>
			// 	</div>
			// </div>