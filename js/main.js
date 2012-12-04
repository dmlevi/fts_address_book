
// start annoynymous function
(function() {

    // define the DOM elements
    var searchForm = document.getElementById("search-form"),
         searchField = document.getElementById("q"),
         target = document.getElementById("output");


    // address book data

     var contacts = {

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
    };

    var object = contacts.addressBook,
          count = object.length,
          output = document.getElementById("output"),
          i;

    if(count > 0) {

            for (i = 0; i < count; i = i + 1) {
                var item = object[i],
                name = item.name,
                email = item.email;

                output.innerHTML += '<p><a href="mailto:' + email + '">' + name + '</a></p>';
            }
    }

    function getContacts() {

    }


})();