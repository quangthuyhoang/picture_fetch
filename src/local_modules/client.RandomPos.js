export function randomPicPos(arr){
	var imgArr = arr;
	const div_height = 450;
	const div_width = 525;
	const b_width = document.body.clientWidth;
	const b_height = document.body.clientHeight;
 
	for(var i = 0; i < imgArr.length; i++) {
   
	 var pos_x = (Math.random()*(b_width - div_width*.75)).toFixed();
	 var pos_y = (Math.random()*(b_height - div_height) + 70).toFixed();
	 var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
	 var deg = (Math.random()*-7*plusOrMinus).toFixed();
	 imgArr[i].pos = {x: pos_x, y: pos_y, deg: deg};
	 imgArr[i].class = "PictureBox nodisplay";
	 imgArr[i]._id = i + 1;
	}
	return imgArr;
}

export function getPictures() {
	  var newData = [];
	  var qURL = 'http://localhost:5000/api/pictures';
  
	  fetch(qURL).then(function(response) {
		return response.json();
	  })
	  .then((data) => {
		newData = addClass(randomPicPos(data));
		console.log("initial server check", newData)
		return newData;
	  })
}

export function addClass(dataArr) {
    var imgArr = dataArr;

    return imgArr.map(function(img) {

      var imgObj = img;
      imgObj.class = "PictureBox nodisplay";
      return imgObj;
    }) 
  }

 // Fisher–Yates shuffle
export function shuffle(array) {
	var m = array.length, t, i;
  
	// While there remain elements to shuffle…
	while (m) {
  
	  // Pick a remaining element…
	  i = Math.floor(Math.random() * m--);
  
	  // And swap it with the current element.
	  t = array[m];
	  array[m] = array[i];
	  array[i] = t;
	}
  
	return array;
  }
