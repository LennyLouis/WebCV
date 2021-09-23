new fullpage('#fullpage', {
    navigation: true,
    responsiveWidth: 700,
    anchors: ['home', 'about-us'],
    parallax: true,
    scrollBar:true,
    onLeave: function(origin, destination, direction){
        console.log("Leaving section" + origin.index);
    },
});

document.getElementById("img").style.height = document.getElementById("html").offsetHeight+500;


// var image = document.getElementsByClassName('thumb');
// new simpleParallax(image);