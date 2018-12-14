

function myFunction(){
    document.getElementById("email").innerHTML
    = "gallowabdul@gmail.com";
}

function changeImg(){
  var img =  document.getElementById("profile").src = "images/IMG-20180828-WA0022.jpg";
  
}

function changeImage(){
    document.getElementById("profile").src = "images/IMG_20181027_232202.jpg"
}

function changeIcon(){
    document.getElementById("html").innerHTML = "HTML";
};

// counter
(document).ready(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
