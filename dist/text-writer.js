var i = 0;
var txt = 'Fullstack Developer';
var speed = 100;

function typeWriter() {
        
        if (i < txt.length) {
          document.getElementById("write-text").innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }


}

window.onload = setTimeout(typeWriter, 200);
