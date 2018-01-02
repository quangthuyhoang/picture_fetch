import React, { Component } from 'react';
import './App.css';


class SearchBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: "",
		}

		this.handleQueryChange = this.handleQueryChange.bind(this);
	}

	handleQueryChange(e) {
		e.preventDefault();
		this.setState({query: e.target.value})
	}

	render() {
		return (
			<div className="searchbox">
				<form name="picSearch">
					<input onChange={this.handleQueryChange} name="query" class="sb-search-input" type="search" placeholder="search for pictures"/>
					<input type="submit" value="" />
					<span class="sb-icon-search"></span>
				</form>

			</div>

			)
	}
}

export default SearchBox;