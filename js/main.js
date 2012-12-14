// start annoynymous function
$(document).ready(function() {


   $.getJSON('data/contacts.json', function (data) {

        var addrBook = data.addressBook,
        count = addrBook.length;

        $('#output').empty();

        if (count > 0) {

            $.each(addrBook, function (i, obj) {

            });
        }
   });
});

    // define the DOM elements
    var searchForm = document.getElementById("search-form"),
        searchField = document.getElementById("q"),
        target = document.getElementById("output");


    var addr = {

        search: function(event) {

            var output = document.getElementById("output");

            ajaxCall("data/contacts.json", output, function (data) {


                var searchValue = searchField.value,
                    addrBook = data.addressBook,
                    count = addrBook.length,
                    i;

                event.preventDefault();

                target.innerHTML = "";

                if (count > 0 && searchValue !== "") {

                    for (i = 0; i < count; i = i + 1) {

                        var obj = addrBook[i],
                            isItFound = obj.name.match(new RegExp(searchValue, "i"));

                        if (isItFound) {

                            target.innerHTML += '<p><a href="mailto:' + obj.email + '">' + obj.name + '</a></p>';
                        }
                    }
                }
            });
        },

        getAllContacts: function() {

            var output = document.getElementById("output");

            ajaxCall("data/contacts.json", output, function (data) {

                var addrBook = data.addressBook,
                    count = addrBook.length,
                    i;

                target.innerHTML = "";

                if (count > 0) {

                    for (i = 0; i < count; i = i + 1) {

                        var obj = addrBook[i];

                        target.innerHTML += '<p><a href="mailto:' + obj.email + '">' + obj.name + '</a></p>';
                    }
                }
            });
        }
    };

    searchField.addEventListener("keyup", addr.search, false);

})();