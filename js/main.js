// document.ready waits for the entire dom to load. As soon as the dom is fully loaded, the code will execute.

$(document).ready(function() {

    // Here I am caching some global variables that I will need
    var searchField = $('#q'),
    searchValue = searchField.value;

    //.getJson is magic! I pass in the url of the data
    $.getJSON('data/contacts.json', function (data) {

        //storing address book data in a local variable named addrBook, I think this may be my problem since its local. I need it to keep goin for my loop towards the bottom!
        var addrBook = data.addressBook,

        //grabbing the count for the loop
        count = addrBook.length;

        // target the query and execute function
        $('#q').keyup(function() {
            
        //clear any html in the target
        $('#output').empty();

        //checking the count
        if (count > 0) {

            //special jquery loop. Assign each addr to obj
            $.each(addrBook, function(i, obj) {

               //check if there is a match using regEx
                isItFound = obj.name.match(new RegExp(searchValue, "i"));

                if (isItFound) {

                    //if its found, print out the option
                    $('#output').append('<p><a href="mailto:' + obj.email + '">' + obj.name + '</a></p>');
                    }
                }); //close
            } //close count
        }); //close keyup
    }); // end ajax call
}); // dom ready close