$(document).ready(function() {
 
    //Registration Function
    $('.adminSubmitBtn').click(function(event) {
      event.preventDefault();
      const adminID = $('#adminID').val();
      const password = $('#password').val();
      //Check if user input is empty
      if (!adminID || !password ) {
        $('.adminmessage').html('Kindly fill in all fields');
        return;
      }
      $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/admin',
        data: {
          adminID,
          password,
        },
        beforeSend: function() {
          $('.adminmessage').html('Loading....');
        },
        success: function() {
          $('.adminmessage').html('Admin added');
        },
      });
    });
  })
  
  