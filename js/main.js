// start annoynymous function
(function() {


    // define the DOM elements

    var searchForm = document.getElementById("search-form"),
        searchField = document.getElementById("q"),
        target = document.getElementById("output"),
        count = contacts.addressBook.length;

    var addr = {

        search: function(event) {

            var searchValue = searchField.value,
                i;

            event.preventDefault();

            target.innerHTML = "";

            if (count > 0 && searchValue !== "") {

                for (i = 0; i < count; i = i + 1) {

                    var obj = contacts.addressBook[i],
                        isItFound = obj.name.toLowerCase().indexOf(searchValue);

                    if (isItFound !== -1) {

                        target.innerHTML += '<p><a href="mailto:' + obj.email + '">' + obj.name + '</a></p>';
                    }
                }
            }
        },

        getAllContacts: function() {

            var i;

            target.innerHTML = "";

            if (count > 0) {

                for (i = 0; i < count; i = i + 1) {

                    var obj = contacts.addressBook[i];

                    target.innerHTML += '<p><a href="mailto:' + obj.email + '">' + obj.name + '</a></p>';

                }
            }
        }
    };

    searchField.addEventListener("keyup", addr.search, false);

})();