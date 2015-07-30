$(document).ready(function() {
    $(".navbar-nav li a").click(function() {
        if (!$(this).hasClass("dropdown-toggle")) {
            $(".navbar-collapse").collapse('hide');
        }
    });
    $(".navbar-brand").click(function() {
        $(".navbar-collapse").collapse('hide');
    });
});