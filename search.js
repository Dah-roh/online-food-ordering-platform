 $('.searchBtn').click(function(event) {
    event.preventDefault();
    const food = $('#food').val();
    //Check if user input is empty
    if (!food ) {
      $('.result').html('Kindly fill in all fields');
      return;
    }
    //Make get request to check if the user already exist
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/users?email=${email}`,
      data: {
        email,
      },
      beforeSend: function() {
        $('.result').html('Loading....');
      },
      success: function(response) {
        if (response.length) {
          $('.result').html(foodname);
        } else {
          $('.result').html('User already exist');}
        })