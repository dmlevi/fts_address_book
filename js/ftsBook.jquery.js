(function( $ ){

  $.fn.ftsBook = function( options ) {  

    // Create some defaults, extending them with any options that were provided
    var settings = $.extend( {
      url        : 'data/contacts.json',
      query : '#q',
      output : '#output'
    }, options);

    return this.each(function() {        
        
      $.getJSON(options.url, function(data) {

          var searchField = $(options.query),
              imgs = $('img').attr(),
              addrBook = data.addressBook,
              count = addrBook.length;

          $('#q').keyup(function() {

              var searchValue = searchField.val(),
                    imgValue = imgs.val();

              $(options.output).empty();

              if (count > 0 && searchValue !== "") {

                  $.each(addrBook, function(i, obj) {

                      isItFound = obj.name.match(new RegExp(searchValue, "i"));
                      match = obj.id.match(new RegExp(imgValue, "i"));
                      template = $('#template').html();

                      if (isItFound) {

                          $(options.output).append(Mustache.to_html(template, obj));

                          $(imgValue).addClass("transition");
                      }
                  }); //close
              } //close count 
          }); //keyup close
      }); // end getJson call

    });

  };
})( jQuery );
