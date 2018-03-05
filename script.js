var x = Math.floor(Math.random() * 3);
$(document).ready(function(){
    
	'use strict';
        if (x === 0){
            $( ".quotetext" ).append( "Greatings" );
        }

        if (x === 1) {
            $( ".quotetext" ).append( "Yes is of an project" );
        }
        if (x === 2) {
            $( ".quotetext" ).append( "Hello" );
        }

    $("body").fadeIn(500);
    
    $(".startbutton").click(Start);

})

function Start(){
    $(".startdiv").fadeOut(500);
    $(".trans1").delay(500).animate({
        opacity: '1',
        marginLeft: ($(window).width() - $(".trans1").width()) / 2 
    });
    $(".trans2").delay(1500).animate({
        opacity: '1',
        marginLeft: ($(window).width() - $(".trans2").width()) / 2 
    });
    $(".trans3").delay(2500).animate({
        opacity: '1',
        marginLeft: ($(window).width() - $(".trans3").width()) / 2 
    });
}

