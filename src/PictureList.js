import React, { Component } from 'react';
import PictureBox from './PictureBox';


class PictureList extends Component {
	render() {

		var imgList = this.props.data;

		let newList = imgList.map((picture, i) => {
			const pStyle = {
			 position: 'absolute',
			 left: picture.pos.x + 'px',
			 top: picture.pos.y + 'px',
			 border: '1px solid black',
			 transform: 'rotate('+picture.pos.deg+'deg)',
			 boxShadow: '-10px 0px 20px 0px rgba(0,0,0,0.5)',
  			 padding: '5px',
  			 backgroundColor: 'white',
			}
			var picSource;
			if(picture.name) {
			 picSource = './img/' + picture.name //+ '.jpg'
			}

			return (
				<PictureBox refID={picture._id} key={i} pStyle={pStyle} imgUrl={picture.url ? picture.url : picSource}
				  display={picture.class}/>
				)
		});

		return (
			<div id="imgList">
				{newList}
			</div>
			)
		

	}
}

export default PictureList;

// <PictureBox refID={picture._id} key={i} pStyle={pStyle} imgUrl={picture.url ? picture.url : picSource}
// 				 imgThumb={picture.thumbnail.url} display={picture.class}/>