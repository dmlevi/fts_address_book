$(document).ready(function() {

    var searchField = $('#q'),
        searchValue = searchField.value;

    $.getJSON('data/contacts.json', function(data) {

        var addrBook = data.addressBook,
            count = addrBook.length;

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