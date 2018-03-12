var x = Math.floor(Math.random() * 3);
$(document).ready(function(){
     
	'use strict';
        if (x === 0){
            $( ".quotetext" ).append( "\"Greatings\"" );
        }

        if (x === 1) {
            $( ".quotetext" ).append( "\"Yes is of an project\"" );
        }
        if (x === 2) {
            $( ".quotetext" ).append( "\"Hello\"" );
        }

    $("body").fadeIn(500);
    
    $(".startbutton").click(Start);

})

function Start(){
    $(".startdiv").fadeOut(500);
    $(".startdiv").remove();
    $(".firstdiv").delay(500).animate({
        opacity: '1',
        marginLeft: ($(window).width() - $(".firstdiv").width()) / 2 
    })
    $(".page").fadeIn(500);
    $(".pagination").fadeIn(500);
    $(function() {
        $.scrollify({
          section : ".page",
        });
        $.scrollify.instantMove("#first");
      });
	$(function() {
  $.scrollify({
    scrollbars:false,
    before:function(i,panels) {

      var ref = panels[i].attr("data-section-name");

      $(".pagination .active").removeClass("active");

      $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
    },
    afterRender:function() {
      var pagination = "<ul class=\"pagination\">";
      var activeClass = "";
      $(".panel").each(function(i) {
        activeClass = "";
        if(i===0) {
          activeClass = "active";
        }
        pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
      });

      pagination += "</ul>";

      $(".home").append(pagination);
      /*

      Tip: The two click events below are the same:

      $(".pagination a").on("click",function() {
        $.scrollify.move($(this).attr("href"));
      });

      */
      $(".pagination a").on("click",$.scrollify.move);
    }
  });
});
}


