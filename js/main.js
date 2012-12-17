$(document).ready(function() {

    $.getJSON('data/contacts.json', function(data) {

        var addrBook = data.addressBook,
            count = addrBook.length;

        $('#output').empty();
    }); // end ajax call
    var searchForm = $("#search-form");
    searchField = $("q");
    target = $("output");

    var addr = {

        search: function(event) {

            var output = $("#output");

            ajaxCall('data/contacts.json', output, function(data) {

                var searchValue = searchField.value,
                    addrBook = data.addressbook,
                    count = addrBook.length,
                    i;

                event.preventDefault();

                $('#output').empty();


                if (count > 0) {

                    $.each(addrBook, function(i,obj) {

                        isItFound = obj.name.match(new RegExp(searchValue, "i"));

                        if (isItFound) {

                            $('#output').append('<p><a href="mailto:' + obj.email + '">' + obj.name + '</a></p>').fadeIn();
                        }
                    }); // end each
                } // end count
            });

        },

        getAllContacts: function() {

            var output = $("#output");

            ajaxCall('data/contacts.json', output, function(data) {

                var addrBook = data.addressbook,
                    count = addrBook.length,
                    i;

                $('#output').empty();

                if (count > 0) {

                    $.each(addrBook, function(i,obj) {

                        $('#output').append('<p><a href="mailto:' + obj.email + '">' + obj.name + '</a></p>').fadeIn();
                    }
                );
            });
        },

    } //close addr
            searchField.addEventListener("keyup", addr.search, false);
        }); // close document ready​