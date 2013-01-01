(function($){
 
    $.fn.extend({ 

        ftsBook: function(options) {

            var defaults = {
                url: 'data/contacts.json',
                searchField : '#q'
            };
                 
            var options =  $.extend(defaults, options);
 
            return this.each(function() {
            
                var o = options;

                $.getJSON(o.url, function(data) {

                var searchField = (o.searchField),
                    addrBook = data,
                    count = addrBook.length;

                $(o.searchField).keyup(function() {

                var searchValue = searchField.val();

                $(o.searchField).empty();

                if (count > 0) {

                $.each(addrBook, function(i, obj) {

                    isItFound = obj.name.match(new RegExp(searchValue, "i"));

                    if (isItFound) {

                        $(o.searchField).append('<p><a href="mailto:' + obj.email + '">' + obj.name + '</a></p>');
                                }
                            }); //close
                        } //close count 
                    }); //keyup close
                }); // end getJson call
             
            });
        }
    });
     
})(jQuery);
