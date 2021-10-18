//<div id="demo-id"></div>
var elem1 = document.getElementById("demo-id");
//<div class="demo-class"></div>
var elem2 = document.getElementsByClassName("demo-class");
//<div name="demo-name"></div>
var elem3 = document.getElementsByName("demo-name");
//<p>Some text</p>
var elem4 = document.getElementsByTagName("p");

//<div id="demo-id"></div>
var elem1 = document.querySelector("#demo-id");
//<div class="demo-class"></div>
var elem2 = document.querySelectorAll(".demo-class");
//<div name="demo-name"></div>
var elem3 = document.querySelectorAll('[name="demo-name"]');
//<p>Some text</p>
var elem4 = document.querySelectorAll("p");