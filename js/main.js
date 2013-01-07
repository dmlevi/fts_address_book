$(document).ready(function () {

  

  $(window).ftsBook({
    url: 'data/contacts.json',
    query: '#q',
    output: '#output'
  });

  var $container = $('#am-container').hide(),
    $imgs = $container.find('img'),
    totalImgs = $imgs.length,
    cnt = 0;
  $imgs.each(function (i) {
    var $img = $(this);
    $('<img/>').load(function () {
      ++cnt;
      if (cnt === totalImgs) {
        $imgs.show();
        $container.montage({
          liquid: 'true',
          margin: '1',
          minw: '140',
          minh: '200',
          maxh: '350',
          alternateHeight: 'true',
          alternateHeightRange: {
            min: '200',
            max: '400'
          },
          fixedHeight: 'null',
          minsize: 'false',
          fillLastRow: 'false'
        });
      }
    }).attr('src', $img.attr('src'));
  });
}); //ready

// start annoynymous function
(function() {

        // address book data

   var contacts =  {

        "addressBook" : [
            {
                "name": "Kristy Stetson",
                "email": "kristy@freshtilledsoil.com"
            },
            {
                "name": "Alex Sylvia",  
                "email": "alex@freshtilledsoil.com"
            },
            {
                "name": "Alec Harrison",    
                "email": "alec@freshtilledsoil.com"
            },
            {
                "name": "Steve Hickey",
                "email": "steve@freshtilledsoil.com"
            },
            {
                "name": "Mark Grambau",
                "email": "mark@freshtilledsoil.com"
            },
            {
                "name": "Neal Corbett",
                "email": "neal@freshtilledsoil.com"
            },
            {
                "name": "Jonathan Barker",
                "email": "jonathan@freshtilledsoil.com"
            },
            {
                "name": "Tim Wright",
                "email": "tim@freshtilledsoil.com"
            },
            {
                "name": "Sarah Canieso",
                "email": "sarah@freshtilledsoil.com"
            },
            {
                "name": "Jinyoung Chang",
                "email": "jinyoung@freshtilledsoil.com"
            },
            {
                "name": "Dave Romero",
                "email": "dave@freshtilledsoil.com"
            },
            {
                "name": "Paul Greenlea",
                "email": "paul@freshtilledsoil.com"
            },
            {
                "name": "Steve Benoit",
                "email": "steve@freshtilledsoil.com"
            },
            {
                "name": "Michael Connors",
                "email": "michael@freshtilledsoil.com"
            },
            {
                "name": "Geordie Kaytes",
                "email": "geordie@freshtilledsoil.com"
            },
            {
                "name": "Richard Banfield",
                "email": "richard@freshtilledsoil.com"
            },
            {
                "name": "Alex Fedorov",
                "email": "alex@freshtilledsoil.com"
            },
            {
                "name": "Dan Allard",
                "email": "dan@freshtilledsoil.com"
            },
            {
                "name": "Kelly Powell",
                "email": "kelly@freshtilledsoil.com"
            },
            {
                "name": "Mike Banfield",
                "email": "mike@freshtilledsoil.com"
            },
            {
                "name": "Tim Lupo",
                "email": "tim@freshtilledsoil.com"
            },
            {
                "name": "Michele Hartog",
                "email": "michele@freshtilledsoil.com"
            },
            {
                "name": "Michael Perrone",
                "email": "michael@freshtilledsoil.com"
            },
            {
                "name": "Alex Stetson",
                "email": "alex@freshtilledsoil.com"
            },
            {
                "name": "Gary Ambrosino",
                "email": "gary@freshtilledsoil.com"
            },
            {
                "name": "Jason Henrichs",
                "email": "jason@freshtilledsoil.com"
            },
            {
                "name": "Kitt Williams",
                "email": "kitt@freshtilledsoil.com"
            }
        ]
    }


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
