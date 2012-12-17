// start annoynymous function
$(document).ready(function() {


    $.getJSON('data/contacts.json', function(data) {

        var addrBook = data.addressBook,
            count = addrBook.length;

        $('#output').empty();

    });



    // define the DOM elements
    var searchForm = $("#search-form"),
        searchField = $("#q"),
        target = $("#output");


    var addr = {

        search: function(event) {

            var output = $("#output");

            $.ajax({
                type: 'GET',
                url: 'data/contacts.json',
                dataType: 'json',
                success: function(data) {

                    var addrBook = data.addressBook,
                        count = addrBook.length;

                    $('#output').empty();

                    if (count > 0) {

                        $.each(addrBook, function(i) {

                            var obj = addrBook[i],

                                isItFound = obj.name.match(new RegExp(searchValue, "i"));

                            if (isItFound) {

                                $('#output').append('<p><a href="mailto:' + obj.email + '">' + obj.name + '</a></p>');

                            }
                        });
                    }

                }
            });


            getAllContacts: function() {

                var output = $("#output");

                $.ajax({
                    type: 'GET',
                    url: 'data/contacts.json',
                    dataType: 'json',
                    success: function(data) {

                        var addrBook = data.addressBook,
                            count = addrBook.length;

                        $('#output').empty();

                        if (count > 0) {

                            $.each(addrBook, function(i) {

                                var obj = addrBook[i],

                                    $('#output').append('<p><a href="mailto:' + obj.email + '">' + obj.name + '</a></p>');
                            }
                            }
                        });
                }
                };

                searchField.addEventListener("keyup", addr.search, false);

            })();