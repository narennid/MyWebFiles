/**
 * Created by Katsura on 6/4/2016.
 */
function changeImage(){
    var image=document.getElementById('Image1');
    if(image.src.match("bulbOFF")){
        image.src="bulbON.jpg"
    }
    else{
        image.src="bulbOFF.jpg"
    }
}

function  changeFontcolor() {
    var x = document.getElementById('P2');
    x.style.color="red";
    x.style.fontSize="25px";

}

function checkIfNumberBetweenOneAndTen(){
    var x,text;
    x=document.getElementById("I1").value;
    text=document.getElementById('P3');
    if(isNaN(x) || x<1 || x>10){
        text.innerHTML="Input Not OK";
    }
    else {
        text.innerHTML="Input Ok";
    }

}