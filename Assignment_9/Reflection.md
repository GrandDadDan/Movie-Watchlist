# 📝 Reflection

Designing the domain model and class diagram for the Movie Watchlist App was both rewarding and challenging. The hardest part was deciding on the right level of abstraction for each class and method. Initially, I had too many trivial methods cluttering the design, like toggleDarkMode() or hoverCardEffect(), which didn’t contribute much to the overall system behavior. Over time, I learned to focus on what really mattered—core operations like addMovie() in a watchlist or generateRecommendations()—and removed anything too UI-specific or out of scope for object modeling.

Defining relationships between entities also posed a challenge. Some connections were straightforward—like a user writing a review for a movie—but others required deeper thought. For example, I debated whether StreamingInfo should be embedded inside the Movie class or exist as a separate entity. In the end, I made it a separate class connected via association, since the availability could change independently of the movie data and comes from an external API.

Aligning the class diagram with earlier assignments (like use cases and state diagrams) gave the design more direction. For example, the state diagram for the User object included a "Locked" state, which helped me define a meaningful status attribute in the class. Similarly, the activity diagram for Add Movie to Watchlist ensured that methods like addMovie() and checkDuplicates() were present in the class design. I realized that user stories (like US003 for watchlists) could be mapped directly to class responsibilities, which made the system feel more cohesive.

I also had to make trade-offs when deciding between inheritance and composition. Initially, I considered splitting the Admin into its own class with duplicated logic, but I decided to make it inherit from User instead to avoid redundancy. While composition can offer more flexibility, in this case, inheritance felt more intuitive and efficient.

Another trade-off involved modeling recommendations. I first thought about making Recommendation a method inside the User class. However, separating it into its own class allowed for better tracking, updating, and storing of results, especially since recommendations depend on time and movie history.

Throughout this process, I learned a lot about object-oriented design principles, especially cohesion and responsibility. A class should represent a clear concept and own the data and logic related to that concept. Adding too much to a class made it bloated, while over-separating functionality made the diagram fragmented and hard to follow.

The biggest lesson was this: object-oriented modeling is not just about drawing boxes and lines—it’s about thinking how real users interact with the system and making those interactions maintainable, extensible, and logically structured. This reflection process helped me see how design, code, and documentation are all interconnected.


