class Recommendation {
  constructor(recommendationId, userId, generatedDate = new Date()) {
    this.recommendationId = recommendationId;
    this.userId = userId;
    this.generatedDate = generatedDate;
    this.movieList = [];
  }

  generateRecommendations(watchedMovies) {
    // Placeholder logic
    this.movieList = watchedMovies.slice(0, 3); // Top 3 picks
  }

  updateSuggestions(newSuggestions) {
    this.movieList = newSuggestions;
  }
}

export default Recommendation;
