/**
 * Created by Nik on 12.07.2017.
 */
$(document).ready(function(){
  $('.hamburger').click(function() {
      if($(".hamburger").hasClass("active"))
          $('.nav__menu').hide();
      else $('.nav__menu').show();
      $(this).toggleClass('active');
  });
});
