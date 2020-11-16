// listen to the submit of the form and prevent default

    /* document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
    }); 
    */
  

// then save the form data and send it to https://hsh.blnq.dev/javascript-basics/form-fetch.php


document.getElementById("fetch-form").addEventListener("submit", function(event){

    // event.loadDoc()
    // formData()
    let formData = new FormData([form]);

    event.preventDefault();
    console.log(event);
});


function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "https://hsh.blnq.dev/javascript-basics/form-fetch.php", true);
    xhttp.send();
  }

// log the response

// get data from public api https://openlibrary.org/books/OL7353617M.json


// and display the title, first sentence & isbn 13 in the #output element
