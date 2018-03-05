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
	
}



