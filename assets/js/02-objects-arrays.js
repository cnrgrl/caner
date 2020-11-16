/**
 * OBJECTS
 */
let books = {
  book1: '1984',
  book2: 'Faust',
  book3: 'Fantastic Mr. Fox'
};

// add a new book to the books object

books.book4='Les Miserable';


// using dot notation

books.book4='Les Miserable';

// using square bracket notation

books['book5']='PO';


// remove an book from the books object

delete books.book1;
//console.log(books);


// log the third book

//console.log(books.book3);
//console.log(books['book3']);

// iterate over the books and log every single one


var x;
for (x in books) {
  console.log(x+" : "+books[x]);
  
}



/**
 * ARRAYS
 */
let movies = ['Pulp Fiction', 'Inception', 'Call me by your name', 'Batman'];

// add a new movie to the array

movies.push('the Ring');


// remove the book „Call me by your name“ from the books object

delete movies[2];

// log the first movie

console.log(movies[0]);

// iterate over the movies and log every single one 

for (x in movies){

  console.log(movies[x]);

}