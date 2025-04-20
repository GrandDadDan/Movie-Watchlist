class Movie {
  constructor(movieId, title, genre, releaseDate, rating, posterURL) {
    this.movieId = movieId;
    this.title = title;
    this.genre = genre;
    this.releaseDate = releaseDate;
    this.rating = rating;
    this.posterURL = posterURL;
  }

  fetchDetails() {
    return `${this.title} (${this.releaseDate}) - ${this.genre}`;
  }

  checkAvailability() {
    return `Checking availability for ${this.title}...`;
  }
}

export default Movie;
