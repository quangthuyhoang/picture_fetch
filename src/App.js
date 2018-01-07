import React, { Component } from 'react';
import './main.css';
import PictureList from './PictureList';
import SearchBox from './SearchBox';
import data from './data.js';
import imageCheck from 'image-check';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: data,
    }

    this.getDataFromServer = this.getDataFromServer.bind(this);
  }

  // Search picture from google using pic api
  getDataFromServer(str) {

    //replace any space with %20
    var query = str;
    query.replace(" ", "%20");
    var qURL = this.props.url + query + "?offset=1";

    fetch(qURL).then(function(response) {
      return response.json();
    })
    .then((data) => {

      for(var j = 0; j <= data.length-1; j++) {
        data[j]._id = j;
      }

      this.setState({data: data })
      }, (err) => {
        console.log(err)
    })
  }

  render() {
    return (
      <div className="app">
        <SearchBox onHandleSubmit={this.getDataFromServer} checkImage={this.checkImage}/>
        <PictureList data={this.state.data} url={this.props.url} className="imagelist"/>
      </div>
    );
  }
}

export default App;
