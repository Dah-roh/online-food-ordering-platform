$(document).ready(function() {
 
    //Registration Function
    $('.orderSubmitBtn').click(function(event) {
      event.preventDefault();
      const fullname = $('#fullname').val();
      const foodorder = $('#foodorder').val();
      const phonenumber = $('#phonenumber').val();
      const location = $('#location').val();
      //Check if user input is empty
      if (!fullname || !foodorder || !phonenumber|| !location) {
        $('.ordermessage').html('Kindly fill in all fields');
        return;
      }
      $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/orders',
        data: {
          fullname,
          foodorder,
          phonenumber,
          location,
        },
        beforeSend: function() {
          $('.ordermessage').html('Loading....');
        },
        success: function() {
          $('.ordermessage').html('Food order Sent');
        },
      });
    });
  })
  
  