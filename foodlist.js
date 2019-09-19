$(document).ready(function(){
    $.getJSON("db.json", function(data){
        let image="";
        let btn="";
        
        
        $.each(data.food, function(key, value){

            image+="<br>"+"<br>"+"<center>"+"<br>"+'<img src="/'+value.imgurl+'" width="20%" height="200x"/>'+"<H1>"+value.foodname+"</H1>"+"<br>"
            +'<p>'+value.prices+'</p>'+'<a href="'+'foodlist.html?id='+value.id+'"><li>Get ID</li></a>'
        btn+="<details close>"+'<summary id="btn">'
        +"<p>"+value.foodname+"</p>"+'  </summary>'+
        "<br>"+"<br>"+"<br>"+"<center>"+"<br>"+'<img src="/'+value.imgurl
        +'" width="35%" height="200x"/>'+"<H1>"+value.foodname+"</H1>"
        +'<p>'+value.prices+'</p>'+" </details>"+"<br>"
            
        
            
$('#image').html(image)
$('#btn').html(btn);})
        })

})
        let searchUrls = new URLSearchParams(window.location.search);
let idNumber=searchUrls.get('id');
console.log(idNumber)
$('.updateSubmitBtn').click(function(event) {
    event.preventDefault();
const foodname = $('#food').val();
const prices = $('#prices').val();
$.ajax({
    method:"PATCH",
    url:`http://localhost:3000/food/${idNumber}`,
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
    url:`http://localhost:3000/food/${idNumber}`,
  
})
})
