## 🔧 Implementation Language and Design Decisions

This project is implemented in **JavaScript (ES6)** because it is widely used for both front-end and back-end development, and allows for flexible, object-oriented code using classes and modules.

### Key Design Decisions:
- Classes are organized under the `/src/models` directory.
- Each class file corresponds to the structure from the UML class diagram.
- ES6 syntax is used for modern best practices (`import/export`, class constructors, arrow functions).
- Inheritance is demonstrated in the `Admin` class which extends `User`.
- Future files will include creational design pattern examples and unit tests.

This setup prepares the app for applying creational patterns and clean testing using tools like **Jest** or **Mocha**.

## 🧱 Creational Patterns

This app implements all major creational design patterns for demonstration:

- **Simple Factory**: `MovieFactory` returns objects based on genre, centralizing instantiation.
- **Factory Method**: `AuthFactoryMethod` delegates authentication logic to handlers.
- **Abstract Factory**: `StreamingServiceFactory` returns related platform classes.
- **Builder**: `WatchlistBuilder` constructs watchlists step-by-step with optional fields.
- **Prototype**: `MoviePrototype` allows cloning movie templates for performance.
- **Singleton**: `DatabaseConnection` ensures a single global instance for shared queries.

All pattern implementations are found in the `/creational_patterns` directory.

