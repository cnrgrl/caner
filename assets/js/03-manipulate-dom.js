// log text content from #headline
console.log(document.getElementById("headline").innerHTML);

// change the text from the headline to:
// „Cool, sie ist offen! :)“
document.getElementById("headline").innerHTML="Cool, sie ist offen!";

// set value of the input element #input to:
// „Hier steht Text“
document.getElementById("input").value = "Hier steht Text";
document.getElementById("input").name = "Hier steht name";


// set the value of the input element #input
// as the innerHtml of the div #output
document.getElementById("output").innerHTML=document.getElementById("input").value;


// add the class border-red to the body
// if there it doesn't got it already

document.getElementsByTagName("body").class="border-red";
document.getElementsByClassName("border-red").bgcolor="red";

// toggle the class bg-black on the input

// multiply the data-number attribute by 3
// and update the value in the dom