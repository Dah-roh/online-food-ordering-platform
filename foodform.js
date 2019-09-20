$(document).ready(function() {
 
    //Registration Function
    $('.foodSubmitBtn').click(function(event) {
      event.preventDefault();
      const foodname = $('#foodname').val();
      const prices = $('#prices').val();
      const imgurl = $('#imgurl').val();
      //Check if user input is empty
      if (!foodname || !prices || !imgurl) {
        $('.foodmessage').html('Kindly fill in all fields');
        return;
      }
      $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/food',
        data: {
          foodname,
          prices,
          imgurl,
        },
        beforeSend: function() {
          $('.foodmessage').html('Loading....');
        },
        success: function() {
          $('.foodmessage').html('Food added Successfull');
        },
      });
    });
  })
  
  