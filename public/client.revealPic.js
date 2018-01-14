(function goThruList() {
	var imgList = document.getElementById('imgList')
	  if (imgList) {
	    // start display image one at a time
	    var hidden = document.getElementsByClassName("nodisplay");
	    var len = hidden.length;

		if(len > 0) {
			showPic(hidden[0])
			setTimeout(goThruList, 1000)
		} else {
			return;
		}
	} else {
		setTimeout(goThruList, 15)
	}
})();

function showPic(elem) {
	elem.classList.toggle("nodisplay");
}