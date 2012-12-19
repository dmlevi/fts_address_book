$(document).ready(function() {

    $.getJSON('data/contacts.json', function(data) {
        // HINT: all of these variables that are getting set here 
        // are thrown away when the code hits line 10. Research "closures" for why.
        var addrBook = data.addressBook,
            count = addrBook.length,
            searchField = $('#q'),
            searchValue = searchField.value;

    }); // end ajax call

    // HINT: who is receiving the keyup event?
    $('#output').keyup(function(event) {
        
        $('#output').empty();

        if (count > 0) {

            $.each(addrBook, function(i, obj) {

                // COMMENT: Nice use of regular expressions & case-insensitive searching!
                isItFound = obj.name.match(new RegExp(searchValue, "i"));

                if (isItFound) {

                    $('#output').append('<p><a href="mailto:' + obj.email + '">' + obj.name + '</a></p>');
                }
            });
        }
    });
});