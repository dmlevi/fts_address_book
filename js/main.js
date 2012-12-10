// start annoynymous function
(function() {


    // function for detecting compatabilty

    function getHTTPObject () {

        var xhr;

        if (window.XMLHTTPRequest) {

            xhr = new XMLHTTPRequest();
        }  else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Mxm1.XMLHTTP");
        }

        return xhr;
    }


    // define ajax call

    function ajaxCall(dataUrl, outputElement, callback) {

        var request = getHTTPObject();

        outputElement.innerHTML = "We are working hard to load your contacts";

        request.onreadystatechange = function() {

            if (request.readyState === 4 && request.status === 200) {

                var contact = JSON.parse(request.responseText);

                if(typeof callback === "function") {

                    callback(contacts);
                }
            }
        }

        request.open("GET", dataURL, true);
        request.send(null);
    }

    // define the DOM elements

    var searchForm = document.getElementById("search-form"),
        searchField = document.getElementById("q"),
        target = document.getElementById("output"),
    

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

                        var obj = addressBook[i],
                            isItFound = obj.name.match(new RegExp(searchValue, "i"));

                        if (isItFound) {

                                target.innerHTML += '<p><a href="mailto:' + obj.email + '">' + obj.name + '</a></p>';
                            }
                        }
                    }
                });
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