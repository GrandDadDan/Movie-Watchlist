class StreamingInfo {
  constructor(streamingId, movieId, platform, url, lastUpdated = new Date()) {
    this.streamingId = streamingId;
    this.movieId = movieId;
    this.platform = platform;
    this.url = url;
    this.lastUpdated = lastUpdated;
  }

  fetchAvailability() {
    return `Available on ${this.platform} at ${this.url}`;
  }

  updateStatus(newPlatform, newUrl) {
    this.platform = newPlatform;
    this.url = newUrl;
    this.lastUpdated = new Date();
  }
}

export default StreamingInfo;
