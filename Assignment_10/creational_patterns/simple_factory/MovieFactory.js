class Movie {
  constructor(title, genre) {
    this.title = title;
    this.genre = genre;
  }
}

class Documentary extends Movie {
  constructor(title) {
    super(title, 'Documentary');
  }
}

class ActionMovie extends Movie {
  constructor(title) {
    super(title, 'Action');
  }
}

class MovieFactory {
  static createMovie(type, title) {
    switch (type) {
      case 'documentary':
        return new Documentary(title);
      case 'action':
        return new ActionMovie(title);
      default:
        return new Movie(title, 'General');
    }
  }
}

export default MovieFactory;
