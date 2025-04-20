class AuthHandler {
  authenticate() {
    throw new Error('Method must be implemented.');
  }
}

class EmailAuthHandler extends AuthHandler {
  authenticate() {
    return 'Authenticating via Email';
  }
}

class GoogleAuthHandler extends AuthHandler {
  authenticate() {
    return 'Authenticating via Google';
  }
}

class AuthFactory {
  static getAuthHandler(type) {
    switch (type) {
      case 'email': return new EmailAuthHandler();
      case 'google': return new GoogleAuthHandler();
      default: throw new Error('Invalid auth type');
    }
  }
}

export default AuthFactory;
