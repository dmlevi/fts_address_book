// standard ajax xhr function

function getHTTPObject() {

	var xhr;

	if (window.XMLHttpRequet) {

		xhr = new XMLHttpRequet();
	} else if (window.ActiveXObject) {
		xhr = new ActiveXObject("Msxm12.XMLHTTP");
	}

	return xhr;
}


(function () {


	// define the DOM elements

var searchForm = document.getElementByID("search-form"),
	searchField = document.getElementByID("q"),
	count = addressBook.length,
	target = document.getElementByID("output");

	// define address book methods

var addr = {

	search : function(event) {
		var searchValue = searchField.value,
		i;

		event.preventDefault();

		target.innerHTML = "";

		if(count > 0 && searchValue !== "") {
			for(i = 0; i < count; i = i + 1) {

				var obj = contacts.addressBook[i],
				isItFound = obj.name.indexOf(searchValue);

				if(isItFound !== -1) {

					target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">' + obj.email + '</a><p>';
			
				}
			}
		}
	}

	getAllContacts : function () {
		var i;
		target.innerHTML = "";

		if(count > 0) {
			for(i=0; i < count; i = i + 1) {

				var obj = contacts.addressBook[i];

				target.innerHTML += '<p>' + obj.name + ', <a href=mailto:' + obj.email + '">' + obj.email + '</a><p>';
			}
		}
	},

	setActiveSection : function() {
		this.parentNode.removeAttribute("class");
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

