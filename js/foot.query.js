$(document).ready(function() {
 $('#foreground-img').on('click', 'button', function() {
     var state = $(this).text();
     if (state == 'HIDE') {
         $(this).parent().animate({'height':'30px'});
         $(this).removeClass('btn-danger');
         $(this).addClass('btn-success');
         $(this).text('SHOW');
     }
     else {
         $(this).parent().animate({'height':'200px'});
         $(this).removeClass('btn-success');
         $(this).addClass('btn-danger');
         $(this).text('HIDE');
     }
 });
});