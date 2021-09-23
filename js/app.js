new fullpage('#fullpage', {
    navigation: true,
    responsiveWidth: 700,
    anchors: ['home', 'about-us', 'contact'],
    parallax: true,
    scrollBar:true,
    onLeave: function(origin, destination, direction){
        console.log("Leaving section" + origin.index);
    },
});

// var image = document.getElementsByClassName('thumb');
// new simpleParallax(image);