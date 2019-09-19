$(document).ready(function(){
    $.getJSON("db.json", function(data){
        let details="";
        // let btn="";
        
        
        $.each(data.orders, function(key, value){

            details+="<br>"+"<br>"+"<center>"+"<br>"+"<H1>"+value.fullname+"</H1>"+"<br>"
            +'<p>'+value.foodorder+'</p>'+'<p>'+value.phonenumber+"</p>"+'<p>'+value.location+"</p>"+'<p>'+value.quantity+"</p>"+"<br>";
        // btn+="<details close>"+'<summary id="btn">'
        // +"<p>"+value.foodname+"</p>"+'  </summary>'+
        // "<br>"+"<br>"+"<br>"+"<center>"+"<br>"+'<img src="/'+value.imgurl
        // +'" width="35%" height="150mm"/>'+"<H1>"+value.foodname+"</H1>"
        // +'<p>'+value.prices+'</p>'+" </details>"+"<br>"
            
        
            
$('#details').html(details)
// $('#btn').html(btn);})
        })

})})