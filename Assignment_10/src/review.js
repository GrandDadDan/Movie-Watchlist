class Review {
  constructor(reviewId, userId, movieId, rating, comment = '', reviewDate = new Date()) {
    this.reviewId = reviewId;
    this.userId = userId;
    this.movieId = movieId;
    this.rating = rating;
    this.comment = comment;
    this.reviewDate = reviewDate;
  }

  submitReview() {
    console.log(`Review submitted: ${this.comment}`);
  }

  editReview(newRating, newComment) {
    this.rating = newRating;
    this.comment = newComment;
    this.reviewDate = new Date(); // Update timestamp
  }

  deleteReview() {
    console.log('Review deleted.');
    // Assume deletion logic is handled by storage/service layer
  }
}

export default Review;
