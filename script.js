const movies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {

    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
      }

}

function addMovie(movie) {
  movies.push(movie);
}

function printMovies() {
  // Create an HTML element to display the movie list
  const movieListElement = document.createElement('div');
 
  
  
  let totalMovies = 0;

  // Iterate through the array of movies
  for (const movie of movies) {
    const watchedStatus = movie.havewatched ? 'watched' : 'not watched';

    // Create a paragraph element for each movie
    const movieElement = document.createElement('p');
    movieElement.textContent = `${movie.title} (Rating: ${movie.rating}, ${watchedStatus})`;
    movieElement.style.textAlign = "center";
    movieElement.style.backgroundColor = "#B7B7A4";
    movieElement.style.padding = "20px";
    movieElement.style.maxWidth = "500px";
    movieElement.style.margin = "20px auto";
    movieElement.style.borderRadius = "5px";
    movieElement.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
    movieElement.style.color = "#F0EFEB";
    
    
    
    
   
   

    // Append the movie element to the movie list
    movieListElement.appendChild(movieElement);
    

    totalMovies++;
  }

  // Display the total number of movies
  const totalMoviesElement = document.createElement('p');
  totalMoviesElement.textContent = `You have ${totalMovies} movies in total`;
  totalMoviesElement.style.textAlign = "center";
  totalMoviesElement.style.backgroundColor= "#455e29";
  totalMoviesElement.style.padding = "20px";
  totalMoviesElement.style.maxWidth = "350px";
  totalMoviesElement.style.margin = "20px auto";
  totalMoviesElement.style.borderRadius = "5px";
  totalMoviesElement.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
  totalMoviesElement.style.color = "#f0efeb";
  movieListElement.appendChild(totalMoviesElement);



  // Append the movie list to the webpage
  document.body.appendChild(movieListElement);
}

// Function to display movies with high ratings
function highRatings(rating) {
  // Create an HTML element to display high-rated movies
  const highRatingListElement = document.createElement('div');
  highRatingListElement.innerHTML = `<h2>Movies with Ratings >= ${rating}</h2>`;
  
  let highRatedMovies = 0;

  // Iterate through the array of movies
  for (const movie of movies) {
    if (movie.rating >= rating) {
      // Create a paragraph element for each high-rated movie
      const movieElement = document.createElement('p');
      movieElement.textContent = `${movie.title} (Rating: ${movie.rating})`;
      highRatingListElement.style.textAlign = "center";
      highRatingListElement.style.backgroundColor= "#455e29";
      highRatingListElement.style.padding = "20px";
      highRatingListElement.style.maxWidth = "350px";
      highRatingListElement.style.margin = "20px auto";
      highRatingListElement.style.borderRadius = "5px";
      highRatingListElement.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
      highRatingListElement.style.color = "#D4D4D4";
      highRatingListElement.appendChild(movieElement);

      highRatedMovies++;
    }
  }

  // Display the total number of high-rated movies
  const totalHighRatedElement = document.createElement('p');
  totalHighRatedElement.textContent = `Total High-Rated Movies: ${highRatedMovies}`;
  totalHighRatedElement.style.textAlign = "center";
  highRatingListElement.appendChild(totalHighRatedElement);

  // Append the high-rated movie list to the webpage
  document.body.appendChild(highRatingListElement);
}

// Function to change the watched status of a movie
function changeWatched(title) {
  // Find the movie with the specified title
  const movie = movies.find((m) => m.title === title);

  if (movie) {
    // Toggle the watched status
    movie.havewatched = !movie.havewatched;
  }
}


let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

movies.push(x,y,z);


console.log("----------------");
console.log("running program......");
console.log("----------------");
console.log("Printing all movies....");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
console.log("A new movie is added");
addMovie(movie1);
console.log("----------------");


console.log("changing the status of the movie...");
changeWatched("Spiderman");

console.log("----------------");
console.log("Printing all movies....");
printMovies();


console.log("----------------");

changeWatched("Spiderman");

console.log("----------------");

printMovies();

console.log("----------------");

highRatings(3.5);


