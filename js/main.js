$(document).ready(function() {

    var searchField = $('#q'),
        searchValue = searchField.value;

    $.getJSON('data/contacts.json', function(data) {

        var addrBook = data.addressBook,
            count = addrBook.length;

        $('#output').empty();

        $('#q').keyup(function() {

            if (count > 0) {

                $.each(addrBook, function(i, obj) {

                    //check if there is a match using regEx
                    isItFound = obj.name.match(new RegExp(searchValue, "i"));

                    if (isItFound) {

                        $('#output').append('<p><a href="mailto:' + obj.email + '">' + obj.name + '</a></p>');
                    }
                }); //close
            } //close count 
        });
    }); // end getJson call
}); // dom ready close​