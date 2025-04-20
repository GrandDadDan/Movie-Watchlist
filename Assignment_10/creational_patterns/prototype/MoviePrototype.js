class MoviePrototype {
  constructor(title, genre, rating) {
    this.title = title;
    this.genre = genre;
    this.rating = rating;
  }

  clone() {
    return new MoviePrototype(this.title, this.genre, this.rating);
  }
}

export default MoviePrototype;
