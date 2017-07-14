/**
 * Created by Nik on 12.07.2017.
 */
$(document).ready(function(){

  $('#sendlink').click(function() {
      if(!$('#inputName').val()){
          $('#errorInputName').show();
      }
      if(!$('#inputMail').val()){
          $('#errorInputMail').show();
      }
      if(!$('#inputText').val()){
          $('#errorInputText').show();
      }
      function func_sh() {
          $('#errorInputName').hide();
          $('#errorInputMail').hide();
          $('#errorInputText').hide();
      }
      setTimeout(func_sh, 3000);
  });
});