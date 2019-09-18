$(document).ready(function(){
    $.getJSON("db.json", function(data){
        let image="";
        let btn="";
        
        
        $.each(data.food, function(key, value){

            image+="<p>"+value.foodname+"</p>"+"<br>"+'<img src="/'+value.imgurl+'"/>'+"<br>"
            +'<a href="'+'foodlist.html?id='+value.id+'"><li>View Food</li></a>'
        

            
$('#image').html(image);})
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
    url:`http://localhost:3000/food/2`,
    data:{
        foodname: foodname,
        prices: prices
        
    },

})
})
$('.deleteBtn').click(function(event) {
    event.preventDefault();
const foodname = $('#food').val();
const prices = $('#prices').val();
$.ajax({
    method:"DELETE",
    url:`http://localhost:3000/food/2`,
    data:{
        foodname: foodname,
        prices: prices
        
    },
})
})
