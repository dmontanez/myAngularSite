$(document).ready(function() {
    $(".nav-tabs li a").on('click', function(event) {
        event.preventDefault();
    });
    
    $(".dropdown-menu li a").on('click', function(event) {
        event.preventDefault();
    });
    
    var w = 1000;
    
    $(window).on("load resize", function(event){
        w = $(window).width();
        if( w < 500) {
            $(".nav-tabs").hide();
            $(".small").show();
        }
        if (w > 500) {
            $(".small").hide();
            $(".nav-tabs").show();
        }
    });
    
});