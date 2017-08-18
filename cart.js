$(function(){
    $(".button").click(function(){
        let item = $(this).siblings().text();
            targetArea = $("#cart");
        targetArea.append(item)
    })
})
$( ".submit-button" ).click(function() {
  alert( "Your Order Has Been Placed!" );
});