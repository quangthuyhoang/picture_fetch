import React, { Component } from 'react';
import './main.css';
// import TransitionGroup from 'react-transition-group/TransitionGroup';
import PictureList from './PictureList';
import SearchBox from './SearchBox';
import seed from './imgSeed.js';
// import imageCheck from 'image-check';

function randomPicPos(data){
   var imgArr = data;
   const div_height = 450;
   const div_width = 525;
   const b_width = document.body.clientWidth;
   const b_height = document.body.clientHeight;

   for(var i = 0; i < imgArr.length; i++) {
  
    var pos_x = (Math.random()*(b_width - div_width*.75)).toFixed();
    var pos_y = (Math.random()*(b_height - div_height*.75) + 70).toFixed();
    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    var deg = (Math.random()*-7*plusOrMinus).toFixed();
    imgArr[i].pos = {x: pos_x, y: pos_y, deg: deg};
    imgArr[i].class = "PictureBox nodisplay";
    imgArr[i]._id = i + 1;
   }

   return imgArr;
  }

var data1 = randomPicPos(seed);
// console.log("data1", JSON.stringify(seed[0]), JSON.stringify(data1[0]))

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: data1,
      ready: false,
      cnt: 0,
    }

    this.getDataFromServer = this.getDataFromServer.bind(this);
    this.randomPicPos = this.randomPicPos.bind(this);
    this.showPic = this.showPic.bind(this);
    this.intervalReveal = this.intervalReveal.bind(this);
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
      // for(var j = 0; j <= data.length-1; j++) {
      //   data[j]._id = j;
      // }
      newData = this.addClass(this.randomPicPos(data));
      console.log("initial server check", newData)
      this.setState({data: newData }, ()=> this.intervalReveal() )
      }, (err) => {
        console.log(err)
    })
  }

  componentDidMount() {
    console.log("Component Did MOuNT!!", JSON.stringify(this.state.data))
    this.intervalReveal();
  }

  randomPicPos(data){
   var imgArr = data;
   const div_height = 250;
   const div_width = 325;
   const b_width = document.body.clientWidth;
   const b_height = document.body.clientHeight;

   for(var i = 0; i < imgArr.length; i++) {
  
    var pos_x = (Math.random()*(b_width - div_width)).toFixed();
    var pos_y = (Math.random()*(b_height - div_height) + 80).toFixed();
    var deg = (Math.random()*-7).toFixed();
    imgArr[i].pos = {x: pos_x, y: pos_y, deg: deg};
    imgArr[i]._id = i + 1;
   }

   return imgArr;
  }

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
    console.log("notdisplay", notdisplay.length, notdisplay, "display", display.length, display)
    
    // Stop if all pictures are revealed
    if(notdisplay.length < 1) {
      console.log("display length less than 1")
      return;
    }
 

    // reveal on image and join with others
    notdisplay[0]['class'] = "PictureBox show";
    var newData = display.concat(notdisplay);

    this.setState({data: newData, cnt: this.state.cnt + 1}, ()=> {
      console.log("start interval method", this.state.data)
      this.intervalReveal();
    })

  }

  intervalReveal(){
    console.log("interval activated")
    // setTimeout(this.showPic(this.state.data), 2000)
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

