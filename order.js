$(document).ready(function() {
 
    //Registration Function
    $('.orderSubmitBtn').click(function(event) {
      event.preventDefault();
      const fullname = $('#fullname').val();
      const foodorder = $('#foodorder').val();
      const phonenumber = $('#phonenumber').val();
      const location = $('#location').val();
      const quantity = $('#quantity').val();
      //Check if user input is empty
      if (!fullname || !foodorder || !phonenumber|| !location || !quantity) {
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
          quantity
        },
        beforeSend: function() {
          $('.ordermessage').html('Loading....');
          localStorage.setItem('fullname', fullname);
          localStorage.setItem('foodorder', foodorder);
          localStorage.setItem('phonenumber', phonenumber);
          localStorage.setItem('location', location);
          localStorage.setItem('location', quantity);
        },
        success: function() {
          $('.ordermessage').html('Food order Sent.');
          alert("You will recieve a call from our representative shortly to confirm your order!!!")

        },
        
      });
      $('.view1').html("Name: "+fullname);
      $('.view2').html("Food: "+foodorder);
      $('.view3').html("Phone Number: "+phonenumber);
      $('.view4').html("Your location: "+location);
      $('.view5').html("Quantity Ordered: "+quantity);
      
      $('.viewBtn').click(function(event) {
        event.preventDefault();
        const fullname=$('#fullname').val();
      $.ajax({
        method: 'GET',
        url: `http://localhost:3000/orders?fullname=${fullname}`,
        data: { 
         fullname: fullname,
          foodorder:foodorder,
          phonenumber:phonenumber,
          location:location,
        },
        success: function(response) {
          if (response.length) {
            $('.view1').html(fullname);
            $('.view2').html(foodorder);
            $('.view3').html(phonenumber);
            $('.view4').html(location);
          } else {
            $('.view5').html('No orders made!');}
          }
          
        })      
    });
  })
  $('.searchBtn').click(function(event) {
    event.preventDefault();
    const fullname=$('#fullname').val();
  $.ajax({
    method: 'GET',
    url: `http://localhost:3000/food?=${fullname}`,
    data: { 
     fullname: fullname,
      foodorder:foodorder,
      phonenumber:phonenumber,
      location:location,
    },
    success: function(response) {
      if (response.length) {
        $('.view1').html(fullname);
        $('.view2').html(foodorder);
        $('.view3').html(phonenumber);
        $('.view4').html(location);
      } else {
        $('.view5').html('No orders made!');}
      }
      
    })      
})
    

        let searchUrls = new URLSearchParams(window.location.search);
let idn=searchUrls.get('id');
console.log(idn)
$('.updateSubmitBtn').click(function(event) {
    event.preventDefault();
const foodname = $('#food').val();
const prices = $('#prices').val();
$.ajax({
    method:"PATCH",
    url:`http://localhost:3000/food/${idn}`,
    data:{
        foodname: foodname,
        prices: prices
        
    },

})
})

})
$(document).ready(function(){
  $("button").click(function(){
      $.getJSON("json1.json", function(result){
          $.each(result, function(i, obj){
              $("div").append(obj.first + " " + obj.last + " " + obj.desc + " " + "<br>");
          });
      });
  });
});

$(document).ready(function() {
 
  //Registration Function
  $('.messageBtn').click(function(event) {
    event.preventDefault();
    const fullname = $('#fullname').val();
    const email = $('#email').val();
    const message = $('#message').val();
    //Check if user input is empty
    if (!fullname || !email || !message) {
      $('.ordermessage').html('Kindly fill in all fields');
      return;
    }
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/contact',
      data: {
        fullname,
        email,
        message
      },
     
      success: function() {
        $('.sentmessage').html('Sent!');

      },
      
    });
  })
  })