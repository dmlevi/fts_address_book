AUX H2013: JavaScript Primer
=========

Great experience with Javascript
=================================

Sprint 1: Just make the damn thing work
Build a web form that instantly (i.e. without pressing "submit") searches a custom address book and returns all matches. You will need to create the address book data from scratch.

Required functionality:

After the first keypress, all matching search results must be visible
Modifying the search string should instantly update the results
Each search result should be the address book entry's name
Clicking on each search result should fire a mailto: link to send an email to that person
Must incorporate ARIA attributes for accessibility
Limitations:

No jQuery; raw JavaScript only
The address book data must be stored in JSON format inside your script
NO GLOBAL VARIABLES. Don't pollute the global namespace!
Sprint 2: Breaking up with a model
JavaScript data models like the address book don't really belong inside your application code. Take the JSON from Sprint 1 and split it out into its own contacts.json file. Use Ajax calls to pull in the necessary data. Your tool should function exactly as before.

Note: This won't work locally without running a local server. If you're on a Mac, you're in luck: just open up your terminal, navigate to the project folder, and type "python -m SimpleHTTPServer". It should respond with something like "Serving HTTP on 0.0.0.0 port 8000 ..."; in this case, you would point your browser to http://0.0.0.0:8000 to pull up the page. If you're on Windows, you can try your luck with WAMP, but I'm afraid Google is likely to be your best friend in this case.

Limitations:

No jQuery; raw JavaScript only
The address book data must be stored in an external JSON file
NO GLOBAL VARIABLES. Don't pollute the global namespace! (This should go without saying at this point)
Sprint 3: Holla for a $
Load in the jQuery library and "refactor" (i.e. reorganize & simplify) your code from Sprint 2 to incorporate space-saving selection, event attachment and utility functions from jQuery. Again, your tool should function exactly as before.

Note: After you see how easy Ajax is with jQuery, you will DESPISE us for making you build it first in raw JS. You'll get over it.

Keep an eye out for where you can use:

Element selectors
Event handlers
$.getJSON
$.each (see the jQuery documentation for guidance: http://api.jquery.com)
$.map (see the jQuery documentation for guidance: http://api.jquery.com)
Sprint 4: Plug it in, plug it in
Your search tool is getting pretty sweet. Instead of keeping it all to yourself, why don't you turn it into a shareable plugin?

Required functionality:

Plugin must accept any path to an external JSON file (assume proper file formatting) as an option
Plugin must accept a string identifying the desired output element as an option; e.g. if you want to output to a div with ID "output", you should be able to set the output option to "#output" and have it work properly
Sprint 5: Mustachio bashio (EXTRA CREDIT)
Use the mustache.js library (https://github.com/janl/mustache.js/) to eliminate all HTML tags from your JavaScript code and put them in your HTML document where they belong.

During this sprint, feel free to add any styling or extra prettiness to your app. Just don't break the functionality!
