import React, { Component } from 'react';
import './App.css';
import imageCheck from 'image-check';

class SearchBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: "",
		}

		this.handleQueryChange = this.handleQueryChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleQueryChange(e) {
		e.preventDefault();
		this.setState({query: e.target.value})
	}

	handleSubmit(e) {
		e.preventDefault();
		if(e.keyCode !== 13){
			return;
		}
		console.log(this.state.query)
		this.props.onHandleSubmit(this.state.query)
	}

	render() {
		return (
			<div className="searchbox">
				<input onChange={this.handleQueryChange} onKeyUp={this.handleSubmit} name="query" className="sb-search-input" type="search" placeholder="search for pictures"/>

			</div>

			)
	}
}

export default SearchBox;

