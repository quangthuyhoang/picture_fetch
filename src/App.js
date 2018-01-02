import React, { Component } from 'react';
import './main.css';
import ImageList from './ImageList';
import SearchBox from './SearchBox';
import data from './data.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: data,
    }

    this.getDataFromServer = this.getDataFromServer.bind(this);
  }

  getDataFromServer() {
    // Search picture from google using pic api
    // fetch(this.props.url +)
  }

  handle

  render() {
    return (
      <div className="app">
        <SearchBox />
        <ImageList data={this.state.data} url={this.props.url} className="imagelist"/>
      </div>
    );
  }
}

export default App;
