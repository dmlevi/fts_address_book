$(document).ready(function() {

    $.getJSON('data/contacts.json', function(data) {

        // HINT: think about WHEN you're setting these variables. Should they all get set here?
        var addrBook = data.addressBook,
            count = addrBook.length,
            searchField = $('#q'),
            searchValue = searchField.value;

        $('#q').keyup(function(event) {
            
        $('#output').empty();

        if (count > 0) {

            $.each(addrBook, function(i, obj) {

                isItFound = obj.name.match(new RegExp(searchValue, "i"));

                if (isItFound) {

                    $('#output').append('<p><a href="mailto:' + obj.email + '">' + obj.name + '</a></p>');
                    }
                });
            }
        });
    }); // end ajax call
});