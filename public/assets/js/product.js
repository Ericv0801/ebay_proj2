$(document).ready(function () {
    $("#addProduct").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        // [name=plan] will find an element with a "name" attribute equal to the string "plan"
        var newProduct = {
            product_name: $("#addProduct [name=productName]")
                .val()
                .trim(),
            product_description: $("#addProduct [name=productDescription]")
                .val()
                .trim(),
            highest_bid: $("#addProduct [name=sellerPhone]")
                .val()
                .trim(),
            seller_id: $("#addProduct [name=sellerPhone]")
                .val()
                .trim(),
            buyer_id: $("#addProduct [name=sellerPhone]")
                .val()
                .trim()
        };
        // Send the POST request.
        $.ajax("/products_api", {
            type: "POST",
            data: JSON.stringify(newProduct),
            dataType: "json",
            contentType: "application/json"
        }).then(function () {
            // console.log("created new product");
            // Reload the page to get the updated list
            location.reload();
        });
        var newSeller = {
            seller_name: $("#addProduct [name=sellerName]")
            .val()
            .trim(),
            seller_phone: $("#addProduct [name=sellerPhone]")
            .val()
            .trim(),
            product_id: $("#addProduct [name=sellerPhone]")
            .val()
            .trim()
        };
        $.ajax("/seller_api", {
            type: "POST",
            data: JSON.stringify(newSeller),
            dataType: "json",
            contentType: "application/json"
        }).then(function () {
            console.log("created new seller");
            // Reload the page to get the updated list
            location.reload();
        });
    });
});