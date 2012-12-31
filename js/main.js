(function( $ ) {
 
  $.fn.superBook = function(options) {

    var settings =
    {
        'url'   :  '[]',
        'output' : '[]'
    };

    return this.each(function() {
  
    $.getJSON(settings.url, function(data) {

        var searchField = $(this),
            addrBook = data.this,
            count = addrBook.length;

        $(this).keyup(function() {

            var searchValue = searchField.val();

            $(this).empty();

            if (count > 0) {

                $.each(addrBook, function(i, obj) {

                    isItFound = obj.name.match(new RegExp(searchValue, "i"));

                    if (isItFound) {

                    $(this).append('<p><a href="mailto:' + obj.email + '">' + obj.name + '</a></p>');
                    }
                 }); //close
             } //close count 
        }); //keyup close
    }); // end getJson call
    });

  };
})( jQuery );


$(document).ready(function() {

    $.getJSON('data/contacts.json', function(data) {

        var searchField = $('#q'),
            addrBook = data.addressBook,
            count = addrBook.length;

        $('#q').keyup(function() {

            var searchValue = searchField.val();

            $('#output').empty();

            if (count > 0) {

                $.each(addrBook, function(i, obj) {

                    isItFound = obj.name.match(new RegExp(searchValue, "i"));

                    if (isItFound) {

                        $('#output').append('<p><a href="mailto:' + obj.email + '">' + obj.name + '</a></p>');
                    }
                }); //close
            } //close count 
        }); //keyup close
    }); // end getJson call
}); // dom ready close​
