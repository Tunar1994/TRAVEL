// CAROUSEL-1
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var bars = document.getElementsByClassName("bar");
    
    for (i = 0; i < bars.length; i++) {
        bars[i].className = bars[i].className.replace(" active", "");
    }  
    bars[slideIndex-1].className += " active";
}   


// CARD-SLIDE

var span = document.getElementsByTagName('span')
var card = document.querySelectorAll('.card')
var l = 0

span[1].onclick = () => {
    l++
    for(var i of card){
        if(l==0){i.style.left = '0px'}
        if(l==1){i.style.left = '-700px'}
        if(l==2){i.style.left = '-1400px'}
        if(l>2){l=2}
    }
}

span[0].onclick = () => {
    l--
    for(var i of card){
        if(l==0){i.style.left = '0px'}
        if(l==1){i.style.left = '-700px'}
        if(l==2){i.style.left = '-1400px'}
        if(l<0){l=0}
    }
}

