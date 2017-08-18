const orderItems = [
    {
        name: '',
        price: ''
    },
];

$(function(){
    $(".button").click(function(){
        let item = document.getElementsByTagName("h2")[0];
            targetArea = $("#cart");
        targetArea.append(item)
    })
})