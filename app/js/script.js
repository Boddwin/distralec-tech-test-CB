console.log("Load script.js");

// Instantiating the global app object
var app = {};


$(document).ready(function () {
  
    // FETCHING DATA FROM JSON FILE
    $.getJSON("src/data.json", 
            function (data) {
        var item = '';

        console.log(data);

        // ITERATING THROUGH OBJECTS
        $.each(data.carouselData, function (key, value) {

            // console.log("key:", key + ': value: '  + value); 
            console.log('name: ' + value.name + ' | type: ' +value.typeName);

            // CONSTRUCTION OF LIST USING DATA FROM JSON OBJECT
            item += '<li class="glide__slide">' + '<p>' + value.typeName + '</p>' + '<p>' + value.name + '</p>' + '<img src="value.productImageUrl">' + '<p>' + value.salesUnit + '</p>' + '<p>' + value.price.formattedValue + '</p>' + '<button>Buy now</button>' + '</li>';

        });
          
        //INSERTING ROWS INTO TABLE 
        $('.glide__slides').append(item);
    });
});