// standard ajax xhr function

function getHTTPObject() {

	var xhr;

	if (window.XMLHttpRequet) {

		xhr = new XMLHttpRequet();  
		} 
		else if (window.ActiveXObject) {
			xhr = new ActiveXObject("Msxm12.XMLHTTP");
	}

	return xhr;
}

// define the ajax call

function  ajaxCall(dataUrl, outputElement,callback) {

	var request = getHTTPObject();

	outputElement.innerHTML = "Loading...";

	request.onreadystatechange = function() {

		if ( request.readyState === 4 && request.status === 200 ) {

			var contacts = JSON.parse(request.responseText);

			if(typeof callback === "function") {

				callback(contacts);
			} 			
		}
	}
	
	request.open("GET", dataUrl, true);
	
	request.send(null);
}

// start annoynymous function

(function (){

	// define the DOM elements

	var searchForm = document.getElementById("search-form"),
		searchField = document.getElementById("q"),
		target = document.getElementById("output");

	// define address book methods

	var addr = {

		search : function(event) {

			var output = document.getElementById("output");

			ajaxCall('data/contacts.json', output, function (data) {


				var searchValue = searchField.value,
					addrBook = data.addressBook,
					count = addrBook.length,
					i;

				event.preventDefault();

				target.innerHTML = "";

				if(count > 0 && searchValue !== "") {

					for(i = 0; i < count; i = i + 1)  {

						var obj = addrBook[i],
							isItFound = obj.name.indexOf(searchValue);

						if(isItFound !== -1) {

							target.innerHTML += '<p>' obj.name + ',<a href="mailto:' + obj.email + ' ">' + obj.email + '</a></p>';
						}
					}
				}
			});
		},

		getAllContacts : function () {

			var output = document.getElementById("output");

			ajaxCall('data/contacts.json', output, function (data) {

				var addrBook = data.addressBook,
					count = addrBook.length,
					i;

				target.innerHTML = "";

				if(count > 0) {
				
					for(i=0; i < count; i = i + 1) {

						var obj = addrBook[i];

						target.innerHTML += '<p>' obj.name + ',<a href="mailto:' + obj.email + ' ">' + obj.email + '</a></p>';
					}
				}
			});
		},

		setActiveSection : function() {
			
			this.parentNode.removeAttribute("class", "active");
		},

		removeActiveSection : function () {
			
			this.parentNode.removeAttributes("class");
		},

		addHoverClass : function() {
			
			searchForm.setAttribute("class", "hovering");
		},

		removeHoverClass : function() {
			
			searchForm.removeAttribute("class");
		}
	}   

		// end addr object

	// activate the event listeners

	searchField.addEventListener("keyup", addr.search, false);

	searchField.addEventListener("focus", addr.setActiveSection, false);

	searchField.addEventListener("blur", addr.removeActiveSection, false);

	getAllButton.addEventListener("click", addr.getAllContacts, false);

	searchForm.addEventListener("mouseover", addr.addHoverClass, false);

	searchForm.addEventListener("mouseout", addr.removeHoverClass, false);

	searchForm.addEventListener("submit", addr.search, false);

})();

