import 'jquery';
import './lib/jquery.countdown.js';

$(function() {

  $('#time').countdown('2018/05/01', function(event) {
	  $(this).html(event.strftime('%D : %H : %M : %S'));
  });

});





