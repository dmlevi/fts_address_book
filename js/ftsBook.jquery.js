(function( $ ){

  $.fn.ftsBook = function( options ) {  

    // Create some defaults, extending them with any options that were provided
    var settings = $.extend( {
      'url'         : 'data/contacts.json',
      'query' : '#q',
      'output' : '#output'
    }, options);

    return this.each(function() {        
        
      $.getJSON(options.url, function(data) {

          var searchField = $(options.query),
              addrBook = data.addressBook,
              count = addrBook.length;

          $('#q').keyup(function() {

              var searchValue = searchField.val();

              $(options.output).empty();

              if (count > 0) {

                  $.each(addrBook, function(i, obj) {

                      isItFound = obj.name.match(new RegExp(searchValue, "i"));

                      if (isItFound) {

                          $(options.output).append('<p><a href="mailto:' + obj.email + '">' + obj.name + '</a></p>');
                      }
                  }); //close
              } //close count 
          }); //keyup close
      }); // end getJson call

    });

  };
})( jQuery );
