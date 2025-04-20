class Netflix {
  stream() {
    return 'Streaming from Netflix';
  }
}

class Hulu {
  stream() {
    return 'Streaming from Hulu';
  }
}

class StreamingServiceFactory {
  static getStreamingPlatform(type) {
    switch (type) {
      case 'netflix': return new Netflix();
      case 'hulu': return new Hulu();
      default: throw new Error('Service not found');
    }
  }
}

export default StreamingServiceFactory;
