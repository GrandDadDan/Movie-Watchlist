import User from './User.js';

class Admin extends User {
  constructor(userId, name, email, passwordHash, role = 'admin') {
    super(userId, name, email, passwordHash, 'Active');
    this.role = role;
  }

  manageUsers() {
    console.log('Managing users...');
  }

  manageContent() {
    console.log('Managing content...');
  }

  auditActivity() {
    console.log('Auditing system activity...');
  }
}

export default Admin;
