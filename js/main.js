
$(document).ready(function() {

    $(window).ftsBook({url: 'data/contacts.json', query : '#q', output : '#output'});

});



// $(document).ready(function() {

//     $.getJSON('data/contacts.json', function(data) {

//         var searchField = $('#q'),
//             addrBook = data.addressBook,
//             count = addrBook.length;

//         $('#q').keyup(function() {

//             var searchValue = searchField.val();

//             $('#output').empty();

//             if (count > 0) {

//                 $.each(addrBook, function(i, obj) {

//                     isItFound = obj.name.match(new RegExp(searchValue, "i"));

//                     if (isItFound) {
    
//                         $('#output').append('<p><a href="mailto:' + obj.email + '">' + obj.name + '</a></p>');
//                     }
//                 }); //close
//             } //close count 
//         }); //keyup close
//     }); // end getJson call
// }); // dom ready close​
