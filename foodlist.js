$(document).ready(function(){
    $.getJSON("db.json", function(data){
        let image="";
        let image1="";
        let btn="";
        
        
        $.each(data.food, function(key, value){

            image+="<br>"+"<br>"+"<center>"+"<br>"+'<img src="/'+value.imgurl+'" width="40%"/>'+"<H1>"+value.foodname+"</H1>"+"<br>"
            +'<a href="'+'foodlist.html?id='+value.id+'"><li>Get ID</li></a>'
        btn+="<details close>"+'<summary id="btn">'
        +"<p>"+value.foodname+"</p>"+'  </summary>'+
        "<br>"+"<br>"+"<br>"+"<center>"+"<br>"+'<img src="/'+value.imgurl
        +'" width="35%" height="200px"/>'+"<H1>"+value.foodname+"</H1>"
        +'<p>'+value.prices+'</p>'+" </details>"+"<br>"
            
        
            
$('#image').html(image)
$('#image1').html(image1)
$('#btn').html(btn);})
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
$('.deleteBtn').click(function(event) {
    event.preventDefault();
$.ajax({
    method:"DELETE",
    url:`http://localhost:3000/food/${idn}`,
  
})
})
