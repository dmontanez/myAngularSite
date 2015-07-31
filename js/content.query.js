$(document).ready(function() {
    $(".nav-tabs li a").on('click', function(event) {
        event.preventDefault();
    });
    
    $(".dropdown-menu li a").on('click', function(event) {
        event.preventDefault();
    });
    
    var w = $(window).width();
        if( w < 650) {
            $(".dropdown.small").show();
            $(".nav-tabs").hide();
        }else {
            $(".nav-tabs").show();
            $(".dropdown.small").hide();
        }

    $(window).on("resize", function(event){
        w = $(window).width();
        if( w < 650) {
            $(".dropdown.small").show();
            $(".nav-tabs").hide();
        }else {
            $(".nav-tabs").show();
            $(".dropdown.small").hide();
        }
    });
    
});