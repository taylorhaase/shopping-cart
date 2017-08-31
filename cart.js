var items = [];
targetArea = $("#cart");
const subtotalContainer = $("#subtotal");
const taxContainer = $("#tax");
const totalContainer = $("#total");

$(function addToCart(){
    $(".button").click(function(){
        targetArea.empty();
        let price = parseFloat($(this).siblings("p").text().substring(1));
        let name = $(this).siblings("h2").text()
        let this_item = {};
        this_item.name = name;
        this_item.price = price;

        items.push(this_item);

        items.forEach(function(item){
            let itemElement = "<p>" + item.name + ": " + item.price + "</p>"
            targetArea.append(itemElement);
        })
    let subtotal = items.reduce(function(accumulator, currentItem){
        return accumulator + currentItem.price;
    }, 0);

    let subtotalElement = "<p>" + subtotal + "</p>"
    subtotalContainer.empty();
    subtotalContainer.append(subtotalElement);

    let notFixedTax = subtotal * .10;
    let tax = notFixedTax.toFixed(2);

    let taxElement = "<p>" + tax + "</p>"
    taxContainer.empty();
    taxContainer.append(taxElement);

    let notFixedTotal = subtotal + notFixedTax;
    let total = notFixedTotal.toFixed(2);

    let totalElement = "<p>" + total + "</p>"
    totalContainer.empty();
    totalContainer.append(totalElement);

    });
});


$( ".submit-button" ).click(function() {
  alert( "Your Order Has Been Placed!" );
});


