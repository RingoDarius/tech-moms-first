/* 
   document:  refers to the current document
   getElementById: it gets the element based on id value
   src: tells you the source
   function: Saves your code for later
   onclick
*/

document.getElementById("som").onclick = function(){
    document.getElementById("displayImage").src = "images/soundofmusic.jpg";
}



document.getElementById("music").onclick = function(){
     document.getElementById("displayImage").src = "images/images.png";
}

document.getElementById("rain").onclick = function(){
    document.getElementById("displayImage").src = "images/raindrop.jpg";
}

document.getElementById("whiskers").onclick = function(){
    document.getElementById("displayImage").src = "images/cat-whiskers.jpg";
}

document.getElementById("bright").onclick = function(){
    document.getElementById("displayImage").src = "images/kettle.jfif";
}