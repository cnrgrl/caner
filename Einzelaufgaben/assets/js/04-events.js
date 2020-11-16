// log the value of the #input on every input


document.getElementById("input").addEventListener("input",listener);

function listener(){
    console.log(document.getElementById('input').value);
}


// prevent default on button #submit click
document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
  });
// and change text of #output to „Der Button wurde geklickt!“

document.getElementById("submit").addEventListener("click", change);

function change(){

    document.getElementById("output").innerHTML="Der Button wurde geklickt!";
}



// log the message „500px erreicht“, when the user scrolls more than 500px

window.onscroll = function() {myFunction()};

function myFunction() {

  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) 
  {
    //document.getElementById("myP").className = "test";
    console.log("500px erreicht")
  } 
  else 
  {
    //document.getElementById("myP").className = "";
  }
}