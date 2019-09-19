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
          window.location.assign('admin.html');
        },
      });
    });
  })
  $('.adminBtn').click(function(event) {
    event.preventDefault();
    const password = $('#password').val();
    const adminID = $('#adminID').val();
    if (!password || !adminID) {
      $('.adminmessage1').html('Kindly fill in all fields');
      return; 
    }
    //Check if the user is in the database
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/users?adminID=${adminID}&password=${password}`,
      data: {
        adminID: adminID,
        password: password,
      },
      beforeSend: function() {
        $('.adminmessage1').html('Loading....');
      },
      success: function(response) {
        if (!response.length) {
          $('.adminmessage1').html('Login sucessful');
          localStorage.setItem('email', adminID);
          //redirect to home page if the login is successfull
          window.location.assign('adminhome.html');
        } else {
          $('.adminmessage1').html('Username or password Incorrect');
        }
      },
    });
  });
  //Logout Function
  $('.logoutBtn1').click(function() {
    //clear the localstorage and redirect to signup page
    localStorage.clear();
    $('.checkLogin').html('Kindly login');
    window.location.assign('admin.html');
  })
  