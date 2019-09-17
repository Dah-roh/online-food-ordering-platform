$(document).ready(function(){
    $.getJSON("db.json", function(data){
        let image="";
        
        $.each(data.food, function(key, value){

            image+="<p>"+value.foodname+"</p>"+"<br>"+'<img src="/'+value.imgurl+'"/>'+"<br>";
        });
$('#image').html(image)
    })
})