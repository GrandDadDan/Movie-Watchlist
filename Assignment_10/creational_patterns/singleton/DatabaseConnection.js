class DatabaseConnection {
  constructor() {
    if (DatabaseConnection.instance) {
      return DatabaseConnection.instance;
    }
    this.connection = 'Connected to database';
    DatabaseConnection.instance = this;
  }

  getConnection() {
    return this.connection;
  }
}

const dbInstance = new DatabaseConnection();

export { DatabaseConnection }; 
export default dbInstance;     
