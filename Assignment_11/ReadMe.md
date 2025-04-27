## 🗂️ Repository Interface Design

To manage persistence while maintaining modularity and flexibility, we created a generic `Repository` interface in `/repositories/interfaces/Repository.js`. This interface defines standard CRUD operations: `save`, `findById`, `findAll`, and `delete`.

### Why Generics in JS?

Although JavaScript does not support generics like Java or TypeScript, we simulate the pattern by creating a base class and extending it for each entity. This prevents code duplication and ensures all repositories follow a consistent structure.

### Benefits:
- **Decoupling**: Business logic is not tied to specific storage implementations.
- **Extendable**: The generic interface supports in-memory, file-based, or database-backed implementations in the future.
- **Maintainable**: Encourages the use of Dependency Injection or Factory Pattern to switch storage engines seamlessly.

## 🗃️ In-Memory Repository Implementation

All domain entities are now supported with in-memory repositories located in `/repositories/inmemory/`.

We used JavaScript’s `Map` object to simulate a HashMap structure, providing constant time performance for inserts, deletes, and lookups.

### Why In-Memory First?
This approach:
- Enables fast prototyping without needing a database.
- Allows testing the repository interface independently from any backend.
- Makes it easy to swap in a JSON, SQL, or NoSQL implementation later via Dependency Injection or Factory Pattern.

CRUD operations were tested using **Jest** in `/tests/repositories/`, ensuring all functionality is verified.

## 🏭 Repository Factory Pattern

To decouple the repository layer from specific storage backends, we implemented the **Factory Pattern** inside `/factories/RepositoryFactory.js`.

### Why Factory Pattern?

- **Future Proof**: Easily switch between in-memory, file-based, or database-backed implementations.
- **Encapsulation**: Centralizes storage selection logic, keeping services clean and consistent.
- **Flexibility**: Pass a `type` parameter like `"MEMORY"` or `"DATABASE"` to dynamically retrieve the correct repository class.

This structure ensures we can start lightweight and later plug in advanced persistence strategies like MongoDB or JSON file storage with no changes to our service logic.

## 🛡️ Future-Proofing the Repository Layer

We included a stub implementation for a `FileSystemUserRepository` in `/repositories/filesystem/`. This shows how JSON-based file storage could be added in the future without changing business logic.

### How It Works:
- Uses Node's `fs/promises` to read/write data.
- Stores user data in a local JSON file.
- Implements the same `UserRepository` interface, ensuring compatibility with our RepositoryFactory.

This structure proves that additional storage backends like **MongoDB**, **SQLite**, or even **RESTful APIs** can be swapped in by simply:
- Creating a new repository class,
- Extending the interface,
- Registering it in the `RepositoryFactory`.

The service and UI layers remain completely unchanged.
