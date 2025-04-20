class User {
  constructor(userId, name, email, passwordHash, status = 'Inactive') {
    this.userId = userId;
    this.name = name;
    this.email = email;
    this.passwordHash = passwordHash;
    this.status = status;
  }

  register() {
    this.status = 'Registered';
    console.log(`User ${this.name} registered.`);
  }

  login() {
    console.log(`User ${this.name} logged in.`);
  }

  resetPassword(newHash) {
    this.passwordHash = newHash;
  }

  updateProfile(name, email) {
    this.name = name;
    this.email = email;
  }
}

export default User;
