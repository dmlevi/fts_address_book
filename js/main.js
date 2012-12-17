$(document).ready(function() {


    $.getJSON('data/contacts.json', function(data) {

        var addrBook = data.addressBook,
            count = addrBook.length;

        $('#output').empty();

        if (count > 0 ) {

            $.each(addrBook, function ( i, obj) {

                 $('#output').append('<p><a href="mailto:' + obj.email + '">' + obj.name + '</a></p>').hide().fadeIn();
            });
        }
    });
});