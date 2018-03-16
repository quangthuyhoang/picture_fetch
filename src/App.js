import React, { Component } from 'react';
import './main.css';
import PictureList from './PictureList';
import SearchBox from './SearchBox';
// import seed from './imgSeed.js';
import { randomPicPos, shuffle} from './local_modules/client.RandomPos';

// var defaultSeed = randomPicPos(seed);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // data: defaultSeed,
      data: [],
    }

    this.getDataFromServer = this.getDataFromServer.bind(this);
    this.randomPicPos = this.randomPicPos.bind(this);
    this.showPic = this.showPic.bind(this);
    this.intervalReveal = this.intervalReveal.bind(this);
    this.getPictures = this.getPictures.bind(this);
    this.hidePic = this.hidePic.bind(this);
  }

  // Search picture from google using pic api
  getDataFromServer(str) {
    //replace any space with %20
    var query = str;
    var newData = [];
    query.replace(" ", "%20");
    var qURL = this.props.url + query + "?offset=1";
    
    fetch(qURL).then(function(response) {
      return response.json();
    })
    .then((data) => {
      newData = this.addClass(this.randomPicPos(data));
      this.setState({data: newData }, ()=> this.intervalReveal() )
      }, (err) => {
        console.log(err)
    })
  }

  getPictures() {
    var qURL = 'http://localhost:5000/api/pictures';
	  return fetch(qURL).then(function(response) {
		  return response.json();
	  })
	  
  }
  componentWillMount(){
    var newData = [];
    var data = this.getPictures()
    data.then((pics)=> {
      // temp reduce number pictures to 15 for testing purposes
      newData = this.addClass(this.randomPicPos(pics).splice(0,15));
      this.setState({data: newData})
    })
  }

// Checks if images have loaded before revealing them
  componentDidMount() {
    this.intervalReveal();
  }
// add picture position and deg of rotation
  randomPicPos(data){
   var imgArr = data;
   const div_height = 250;
   const div_width = 325;
   const b_width = document.body.clientWidth;
   const b_height = document.body.clientHeight;

   for(var i = 0; i < imgArr.length; i++) {
  
    var pos_x = (Math.random()*(b_width - div_width)).toFixed();
    var pos_y = (Math.random()*(b_height - div_height) + 80).toFixed();
    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
	  var deg = (Math.random()*-7*plusOrMinus).toFixed();
    imgArr[i].pos = {x: pos_x, y: pos_y, deg: deg};
    imgArr[i]._id = i + 1;
   }

   return imgArr;
  }
// sets initial pictures to be invisible
  addClass(dataArr) {
    var imgArr = dataArr;

    return imgArr.map(function(img) {

      var imgObj = img;
      imgObj.class = "PictureBox nodisplay";
      return imgObj;
    }) 
  }

  showPic(dataArr){
// Check which image is hideen and not hidden
  var notdisplay = [], display = [];
    dataArr.forEach(function(obj) {
      if(obj.class.includes("nodisplay")){
        notdisplay.push(obj);
      } else {
        display.push(obj);
      }
    })

    
    // Stop if all pictures are revealed
    if(notdisplay.length < 1) {
      this.hidePic(this.state.data);
      return;
    }
 
    // reveal on image and join with others
    notdisplay[0]['class'] = "PictureBox show";
    var newData = display.concat(notdisplay);

    this.setState({data: newData, cnt: this.state.cnt + 1}, ()=> {
      this.intervalReveal();
    })
  }

  hidePic(dataArr) {
    var arr = shuffle(dataArr);
    this.setState({data: this.addClass(this.randomPicPos(arr))}, () => {
      this.intervalReveal();
    });
  }

  intervalReveal(){
    setTimeout(() => this.showPic(this.state.data), 2000);
  }

  render() {
    return (
      <div className="app">
        <SearchBox onHandleSubmit={this.getDataFromServer} checkImage={this.checkImage}/>
        <PictureList onChange={this.intervalReveal} data={this.state.data} url={this.props.url} className="imagelist"/>
      </div>
    );
  }
}

export default App;

