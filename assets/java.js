var currentScroll = $(window).scrollLeft();
var timer = null;
var isScrolling = false;
var isRunning = false;
var lastScroll;
var lastTime;
var delayInMs;
var z = 0;
var doorX = [];
var doorThis = 500;
var keySelected = false;

function randomizeArray(toShuffle) {
    for(var i = 0; i < toShuffle.length; i++) {
        var indexToSwitch = Math.floor(Math.random() * (toShuffle.length - i)) + i;
        var temp = toShuffle[indexToSwitch];
        toShuffle[indexToSwitch] = toShuffle[i];
        toShuffle[i] = temp;
    }
    return toShuffle;
}


$("document").ready(function() {
    
    for (i = 1; i < 60; i++) {
        doorX.push(doorThis);
        $(".loop").prepend('<img src="img/door_2.png" class="door" id="d' + i + '">');
        $(".loop").prepend('<img src="img/door_back.png" id="db' + i + '" class="doorback">');
        $("#d" + i).css("left", doorThis);
        $("#db" + i).css("left", doorThis);    
        doorThis = doorThis + 500;    
    }
    
    var doorXShuffled = randomizeArray(doorX.slice());
    console.log(doorXShuffled);
    
    while (doorXShuffled[0] < 6000) {
        var doorXShuffled = randomizeArray(doorX.slice());
        console.log(doorXShuffled);
        }
    
    $(".exit").append('<img src="img/door_key.png" id="key" class="door">');
    $("#key").css("left", doorXShuffled[0]);
    var toDelete = doorXShuffled[0] / 500;
    $("#d" + toDelete).css("display", "none");

    
    window.addEventListener('scroll', function() {
        if(isScrolling == false) {
            $(".scrollman").attr("src","gif/w2.gif");
            lastScroll = $(window).scrollLeft();
            lastTime = new Date().getTime();
        }
        
        figureMove();
        
        if(isScrolling == true) {
            measureScroll();
            clearTimeout(timer);        
        }
        
        if(isRunning == false && delayInMs < 17) {
            $(".scrollman").attr("src","gif/w3.gif");
            isRunning = true;
        } 
//        else if(scrollSpeed < 2.5) {
//           $(".scrollman").attr("src","gif/w2.gif");    
//        }
//        
        isScrolling = true;
        timer = setTimeout(function() {
            $(".scrollman").attr("src","gif/w1.gif");
            isScrolling = false;
            isRunning = false;
            }, 200);
        }, false);

//    $(window).scroll(function() {
//    });
});

function measureScroll() {
    var currentTime = new Date().getTime();
    delayInMs = currentTime - lastTime;
    var offset = currentScroll - lastScroll;
//    var scrollSpeed = offset / delayInMs;
//    console.log(delayInMs);

    lastTime = currentTime;
    lastScroll = currentScroll;
}


function figureMove() {
    var x = $(window).scrollLeft();
//    if(currentScroll < x) { 
//    z = z + 2;    
//    } else {
//    z = z - 2;    
//    }    
    $(".scrollman").css("left", x/21);
    console.log(x);
//    console.log($(".scrollman").css("left"));
    currentScroll = x;
};

function message() {
    alert("You can’t enter");
}


//
//function scrollHorizontally(e) {
//    e = window.event || e;
//    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
//    document.documentElement.scrollLeft -= (delta*40); // Multiplied by 40
//    document.body.scrollLeft -= (delta*40); // Multiplied by 40
////    e.preventDefault();
//}
//if (window.addEventListener) {
//    // IE9, Chrome, Safari, Opera
//    window.addEventListener("mousewheel", scrollHorizontally, false);
//    // Firefox
//    window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
//} else {
//    // IE 6/7/8
//    window.attachEvent("onmousewheel", scrollHorizontally);
//};