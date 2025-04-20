class DatabaseConnection {
  constructor() {
    if (DatabaseConnection.instance) {
      return DatabaseConnection.instance;
    }
    this.connected = true;
    DatabaseConnection.instance = this;
  }

  query(sql) {
    return `Executing: ${sql}`;
  }
}

const db = new DatabaseConnection();
Object.freeze(db); // optional hard singleton

export default db;
