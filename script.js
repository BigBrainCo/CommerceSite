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

    $(".next1button").click(NextOne);
})

function Start(){
    $(".startdiv").fadeOut(500);
    $(".firstdiv").delay(500).animate({
        opacity: '1',
        marginLeft: ($(window).width() - $(".firstdiv").width()) / 2 
    })
}

function NextOne(){
	
    $(".firstdiv").fadeOut(500);
    $(".nextdivone").delay(500).animate({
        opacity: '1',
        marginLeft: ($(window).width() - $(".nextdivone").width()) / 2 
    })
}

