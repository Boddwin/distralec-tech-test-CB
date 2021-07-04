console.log("Load script.js");

// Instantiating the global app object
var app = {};


$(document).ready(function () {
    var itemClass;
    $.getJSON('./src/data.json', {get_param: 'value'}, function (getArray) {
        $.each(getArray.data, function (index, element) {
            var totalItems = $(".glide__slide").length;
            if(totalItems === 0) {
                itemClass = "glide__slide active";
            }
            else {
                itemClass = "glide__slide";
            }
            console.log(totalItems);
            var thisImage = element.productImageUrl;
            $('.glide__slides').append('<li class="'+ itemClass +'">' +
                '<img class="d-block w-100" src="' + thisImage + '" alt="'+ element.productImageAltText +'">' +
                '<div class="carousel-caption">' +
                '<h3>' + element.name + '</h3>' +
                '</div>' + '</li>');
        });
    });
})