console.log("hello console!")

/*You'll be using element.classList to manipulate the CSS classes on elements. Note: Output target is the "output-target" element.*/

var outputEl = document.getElementById("output-target");

var articleEl = document.getElementsByClassName("article-section");
console.log("articleEl", articleEl);

function handleSectionClick(MouseEvent) {
    console.log(event);
    var elementText = event.target.innerHTML;
    outputEl.innerHTML = "You clicked on the " + elementText + " section";
}

for (var i = 0; i < articleEl.length; i++) {
    articleEl.item(i).addEventListener("click", handleSectionClick);
}
/* ^^ When any section is clicked the output target text should be "You clicked on the {text of the section} section" ^^*/


var header = document.getElementById("page-title");

header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseout", handleHeaderMouseOut);

/*When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".*/
function handleHeaderMouseOver(event) {
    outputEl.innerHTML = "You moved your mouse over the header";
}

/*When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".*/
function handleHeaderMouseOut(event) {
    outputEl.innerHTML = "You left me!!";
}


var guineaEl= document.getElementById("guinea-pig");

/*When you click the "Add color" button, the guinea-pig element's text color should change to blue.*/
document.getElementById("add-color")
    .addEventListener("click", function(event){
        guineaEl.classList.toggle("blue");
    });

/*When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.*/
document.getElementById("make-large")
    .addEventListener("click", function(event){
        guineaEl.classList.toggle("large");
    });

/*When you click the "Capture it" button, the guinea-pig element should have a border added to it.*/
document.getElementById("add-border")
    .addEventListener("click", function(event){
        guineaEl.classList.toggle("bordered");
    });

/*When you click the "Rounded" button, the guinea-pig element's border should become rounded.*/
document.getElementById("add-rounding")
    .addEventListener("click", function(event){
        guineaEl.classList.toggle("rounded");
    });  

// When you type characters into the input field, the output element should mirror the text in the input field.
var fieldEl = document.getElementById("keypress-input");

fieldEl.addEventListener("keyup", function(event){
  console.log("event", event);
  outputEl.innerHTML = event.target.value;
}); 

/*
for this mirroring part, Steve demos it starting at 6:33 in this video:
https://www.youtube.com/watch?v=5zlueGaybjc&index=4&list=PLX0ucpUE_qIOUsxGNEPpP9yonb4zerVIC
*/