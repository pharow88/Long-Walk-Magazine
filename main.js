//Select element function

const selectElement = function (element) {
	return document.querySelector(element);

};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
	body.classList.toggle('open');


});

var index=0;
show();
function show(){
    var i;
    var slides=document.getElementsByClassName("slide");
    for (i=0;i<slides.length;i++) {
        slides[i].style.display=" none";

    }
    index=index+1;
    if (index>slides.length) {
        index=1;
    }
    slides[index-1].style.display="block";
    setTimeout(show,1500);
}
var i=0;

function read(){
	if (!i) {
		document.getElementById("more").style.display = "inline";
		document.getElementById("dots").style.display = "none";
		document.getElementById("read").innerHTML = "Read less";
		i=1;
	}
	else{
		document.getElementById("more").style.display = "none";
		document.getElementById("dots").style.display = "inline";
		document.getElementById("read").innerHTML = "Read more";
		i=0;

	}

}

