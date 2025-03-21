# 1️⃣ User Story Creation
 
## User Stories  

| Story ID | User Story | Priority | Acceptance Criteria |
|----------|------------|----------|---------------------|
| **US001** | As a user, I want to sign up, log in, and log out so that I can securely access my watchlist. | High | Users receive a confirmation email upon registration. Incorrect login attempts display an error. |
| **US002** | As a user, I want to reset my password so that I can regain access to my account if I forget it. | Medium | A "Forgot Password" option is available, allowing users to receive a reset email. |
| **US003** | As a user, I want to create and manage my personalized watchlists so that I can organize movies I plan to watch. | High | Users can add, update, and delete watchlists. Duplicate movies show an error message. |
| **US004** | As a user, I want to search for movies by title, genre, year, or rating so that I can quickly find content. | High | Search results must load in ≤2 seconds. Results display movie poster, title, release date, and rating. |
| **US005** | As a user, I want to view detailed movie information so that I can learn more about a movie before watching it. | High | Clicking a movie opens a details page with trailers, cast, synopsis, and ratings. A "Back to Search" button is available. |
| **US006** | As a user, I want to share my watchlist with others via a unique link so that I can recommend movies. | Medium | Watchlists have public and private visibility options. Public watchlists are accessible without login. |
| **US007** | As a user, I want to check where a movie is streaming so that I can decide where to watch it. | High | The system fetches streaming availability via an external API and updates daily. |
| **US008** | As a user, I want to mark movies as watched so that I can track my progress. | Medium | Users see a "Watched" indicator and the date they marked it. Error message appears if already marked. |
| **US009** | As a user, I want to receive personalized movie recommendations so that I can discover new content based on my preferences. | High | Recommendations are generated based on watchlist and history, updating weekly. An error appears if not enough data is available. |
| **US010** | As a user, I want the app to be fully responsive so that I can use it on desktop, tablet, or mobile. | High | The UI dynamically adjusts based on screen size. Touch controls are accessible on mobile. |
| **US011** | As a user, I want my watchlist and movie details to update in real time so that I don’t need to refresh manually. | High | Changes to watchlists reflect instantly. Streaming availability syncs automatically. |
| **US012** | As a user, I want meaningful error messages so that I can understand and resolve issues quickly. | High | Network errors display a friendly message. Users receive an email if their account is locked due to failed logins. |
| **US013** | As a system admin, I want user data encrypted with AES-256 so that security compliance is met. | High | All sensitive data is encrypted using AES-256 before storage. |
| **US014** | As a system admin, I want role-based access control (RBAC) so that only authorized users can perform admin functions. | High | Unauthorized admin actions display an error message. |

## Non-Functional User Stories

1. **As a user, I want the app to have dark mode and light mode so that I can choose the theme that reduces eye strain.** 

2. **As a user, I want the interface to be accessible so that people with disabilities can use the app effectively.**  

3. **As a developer, I want the system to be deployable on cloud platforms so that it is scalable and cost-effective.**  

4. **As a developer, I want the codebase to follow modular design principles so that future enhancements and debugging are easier.**  

5. **As a developer, I want automated unit and integration tests so that the core functionalities remain stable.**  

6. **As a system admin, I want the system to support up to 1,000 concurrent users so that it remains performant under high load.**  

7. **As a system admin, I want database queries optimized using indexing and caching so that response times are improved under high load.**  

8. **As a system admin, I want user data encrypted with AES-256 so that security compliance is met.**  

9. **As a system admin, I want role-based access control (RBAC) so that only authorized users can perform admin functions.**  

10. **As a user, I want search results to load in under 2 seconds so that I can quickly find movies.**  

11. **As a user, I want API responses to be under 500ms so that the app remains responsive.**

# Product Backlog

| **Story ID** | **User Story** | **Priority (MoSCoW)** | **Effort Estimate** | **Dependencies** |
|--------------|----------------|-----------------------|---------------------|------------------|
| **US001** | As a user, I want to sign up, log in, and log out so that I can securely access my watchlist. | Must-have | 5 | None |
| **US002** | As a user, I want to reset my password so that I can regain access to my account if I forget it. | Must-have | 3 | US001 |
| **US003** | As a user, I want to create and manage my personalized watchlists so that I can organize movies I plan to watch. | Must-have | 5 | US001 |
| **US004** | As a user, I want to search for movies by title, genre, year, or rating so that I can quickly find content. | Must-have | 4 | None |
| **US005** | As a user, I want to view detailed movie information so that I can learn more about a movie before watching it. | Must-have | 4 | US004 |
| **US006** | As a user, I want to share my watchlist with others via a unique link so that I can recommend movies. | Should-have | 3 | US003 |
| **US007** | As a user, I want to check where a movie is streaming so that I can decide where to watch it. | Must-have | 5 | US004 |
| **US008** | As a user, I want to mark movies as watched so that I can track my progress. | Should-have | 3 | US003 |
| **US009** | As a user, I want to receive personalized movie recommendations so that I can discover new content based on my preferences. | Could-have | 4 | US003, US007 |
| **US010** | As a user, I want the app to be fully responsive so that I can use it on desktop, tablet, or mobile. | Must-have | 5 | None |
| **US011** | As a user, I want my watchlist and movie details to update in real time so that I don’t need to refresh manually. | Must-have | 5 | US003, US007 |
| **US012** | As a user, I want meaningful error messages so that I can understand and resolve issues quickly. | Must-have | 3 | None |
| **US013** | As a system admin, I want user data encrypted with AES-256 so that security compliance is met. | Must-have | 5 | US001 |
| **US014** | As a system admin, I want role-based access control (RBAC) so that only authorized users can perform admin functions. | Must-have | 4 | US001 |

---

# 2️⃣ Product Backlog Creation

## Justification for Prioritization:

### Must-have (Essential for MVP):
- **US001 (Sign up, log in, log out)**: Core feature for user authentication and data security, ensuring users can securely access and manage their data.
- **US002 (Password reset)**: Crucial for user account management, ensuring users can regain access if they forget their credentials.
- **US003 (Create and manage personalized watchlists)**: Core functionality for the app, allowing users to organize and track movies.
- **US004 (Search for movies)**: Fundamental feature to help users find content efficiently.
- **US005 (Movie details page)**: Essential for users to make informed decisions about what to watch.
- **US007 (Streaming availability)**: Important for users to make decisions about where to watch movies, ensuring usability across platforms.
- **US010 (Responsive UI)**: Must ensure a smooth user experience on various devices, crucial for app usability.
- **US011 (Real-time updates)**: Essential for keeping watchlists and movie details current without requiring manual refresh.
- **US012 (Error handling)**: Users must receive clear and helpful feedback to enhance the user experience.
- **US013 (AES-256 encryption)**: Security compliance is critical to protect sensitive user data.
- **US014 (RBAC for admin functions)**: Protects the app from unauthorized administrative actions, ensuring secure app management.

### Should-have (Important but not critical for MVP):
- **US006 (Watchlist sharing)**: Important feature to enhance social functionality and user engagement but not essential for initial app functionality.
- **US008 (Mark movies as watched)**: Useful for tracking progress, but could be deferred in the initial version if resources are constrained.

### Could-have (Nice to have):
- **US009 (Personalized recommendations)**: Provides a personalized experience for users, but is not essential in the initial release. It can be added once the core features are functional and tested.

## Effort Estimate Justification:
- **5** (High complexity): These requirements have a significant impact on performance, security, scalability, and infrastructure, requiring more effort for implementation and testing. Examples include encryption, real-time data updates, and authentication systems.
- **4** (Moderate to high complexity): These are important features that will improve the app’s maintainability, performance, and usability but may require less effort than the most critical aspects. Examples include movie search and viewing detailed movie info.
- **3** (Moderate complexity): These are user-facing features that are essential for usability but can be implemented relatively quickly, such as password reset and basic UI elements.

# Non-Functional Requirements Product Backlog

| **Story ID** | **User Story** | **Priority (MoSCoW)** | **Effort Estimate** | **Dependencies** |
|--------------|----------------|-----------------------|---------------------|------------------|
| **NFR001** | As a user, I want the app to have a dark/light mode toggle for my comfort. | Must-have | 3 | None |
| **NFR002** | As a user, I want the app to comply with WCAG 2.1 so that people with disabilities can use it effectively. | Must-have | 4 | None |
| **NFR003** | As a developer, I want the app to be deployable on Firebase Hosting for scalability and cost-effectiveness. | Must-have | 5 | None |
| **NFR004** | As a developer, I want the codebase to follow modular design principles so that future enhancements and debugging are easier. | Should-have | 4 | None |
| **NFR005** | As a developer, I want automated unit and integration tests so that core functionalities remain stable. | Must-have | 5 | None |
| **NFR006** | As a system admin, I want the app to support up to 1,000 concurrent users so that it remains performant under high load. | Must-have | 5 | None |
| **NFR007** | As a system admin, I want database queries optimized using indexing and caching so that response times are improved under high load. | Should-have | 4 | None |
| **NFR008** | As a system admin, I want user data to be encrypted with AES-256 so that security compliance is met. | Must-have | 5 | None |
| **NFR009** | As a system admin, I want role-based access control (RBAC) so that only authorized users can perform admin functions. | Must-have | 4 | None |
| **NFR010** | As a user, I want search results to load in under 2 seconds so that I can quickly find movies. | Must-have | 4 | None |
| **NFR011** | As a user, I want API responses to be under 500ms so that the app remains responsive. | Must-have | 5 | None |
| **NFR012** | As a user, I want search results to load in under 2 seconds so that I can quickly find movies. | Must-have | 4 | None |

## Justification for Prioritization:

### Must-have (Critical for MVP):
- **NFR001 (Dark/Light mode)**: Essential for improving user comfort and meeting basic usability standards.
- **NFR002 (WCAG 2.1 compliance)**: A must-have to ensure accessibility for users with disabilities and to meet legal and ethical standards.
- **NFR003 (Firebase Hosting)**: Essential for scalability and cost-effectiveness, ensuring the app can handle growth in users.
- **NFR005 (Automated testing)**: Critical for ensuring that core features remain stable as the app is developed further.
- **NFR006 (Support for 1,000 concurrent users)**: Crucial for ensuring the app performs well under heavy traffic.
- **NFR008 (AES-256 encryption)**: Security measure to protect sensitive data, ensuring compliance with security standards.
- **NFR010 (Search results under 2 seconds)**: Critical for providing a smooth user experience when searching for content.
- **NFR011 (API responses under 500ms)**: Key for maintaining fast and responsive interaction with the app.

### Should-have (Important for performance and maintainability):
- **NFR004 (Modular design)**: While it is important for maintainability and flexibility, it is not critical for the first version of the app.
- **NFR007 (Database query optimization)**: This optimization improves performance but is not strictly required for the MVP.

### Could-have (Nice to have, future enhancements):
- **NFR009 (Role-based access control)**: While important for admin security, this can be deferred if resources are limited during early development.

## Effort Estimate Justification:
- **5 (High complexity)**: These requirements have a significant impact on performance, security, scalability, and infrastructure, requiring more effort for implementation and testing. Examples include encryption, cloud deployment, and optimizing API performance.
- **4 (Moderate complexity)**: These are important features that will improve the app’s maintainability, performance, and usability, but they may require less effort than the most critical aspects.
- **3 (Lower complexity)**: These are user-facing usability features, such as the dark/light mode toggle, which can be implemented relatively quickly.

---

# 3️⃣ Sprint Planning

## Sprint Goal Statement:
The goal for this 2-week sprint is to implement core features for user authentication, movie search, and movie details functionality. This will provide the foundation for users to securely access and interact with the app, allowing them to search for movies, view detailed information, and manage their watchlists, thus contributing to the MVP by delivering essential features for the app's functionality.

## Sprint Backlog

| **Task Description**                        | **Task ID** | **Assigned To** | **Estimated Hours** | **Status**       |
|---------------------------------------------|-------------|-----------------|---------------------|------------------|
| Develop user authentication API endpoint   | T-001       | Dev Team        | 10                  | To Do            |
| Design login/signup page UI                | T-002       | UI/UX Team      | 8                   | To Do            |
| Implement password reset functionality      | T-003       | Dev Team        | 6                   | To Do            |
| Develop movie search API endpoint           | T-004       | Dev Team        | 8                   | To Do            |
| Design movie search results page UI         | T-005       | UI/UX Team      | 6                   | To Do            |
| Implement movie details page functionality  | T-006       | Dev Team        | 10                  | To Do            |

## Sprint Goal Justification:
The selected user stories focus on delivering the MVP's core features. By completing the user authentication system, movie search functionality, and movie details page, we will ensure that users can securely log in and search for content. This is foundational for the app’s usability and sets up subsequent features such as watchlist management and streaming service integration. The sprint goal directly impacts the core usability and security of the app, making it essential for the MVP.

---

# 4️⃣ Reflection

Reflecting on my experience applying Agile methodologies to my project, I’ve faced several challenges in prioritization, estimation, and aligning Agile with stakeholder needs. Since I am the only real stakeholder at this point, the struggle has been mostly internal—balancing my expectations, workload, and understanding of Agile practices.

One of the biggest challenges I encountered was prioritization. With so many features I wanted to implement in my Movie Watchlist app, deciding what to focus on first was overwhelming. Initially, everything felt important. Features like user authentication, personalized recommendations, and real-time updates all seemed essential. However, when I tried to implement them simultaneously, I quickly realized that spreading myself too thin led to inefficiency and frustration. I had to step back and determine the Minimum Viable Product (MVP). It was difficult to let go of certain ideas, but prioritization required me to be realistic about what was feasible in the short term. Through trial and error, I learned to break down my work into manageable chunks and focus on delivering value in increments rather than aiming for perfection all at once.

Estimation was another major struggle. Coming from an academic background, I was used to deadlines being set externally, whether by lecturers or project guidelines. In Agile, estimation required me to predict how long tasks would take based on complexity and effort. This was tough because I often underestimated the time needed for debugging, researching solutions, and refining my code. Tasks I thought would take a few hours ended up stretching into days, especially when I encountered unexpected technical challenges. I experimented with different estimation techniques, such as story points and time-boxing, but I still found it difficult to gauge effort accurately. I realized that estimation is a skill that improves with experience, and instead of feeling discouraged, I started tracking my work more carefully to learn from past mistakes.

Aligning Agile with stakeholder needs—when I am both the developer and the stakeholder—presented a unique challenge. At times, I found myself resisting my own decisions. I wanted to move fast, but I also wanted a polished product. This internal conflict made it difficult to adapt to change, which is a core Agile principle. Sometimes, I would plan to implement a feature in a certain way, only to realize midway that a different approach would be better. Initially, I struggled with accepting that change was okay. I had to remind myself that Agile is about being flexible and iterative, not about rigid planning. As I progressed, I became more comfortable with adjusting my backlog and shifting priorities when needed.

Overall, applying Agile as a university student working independently has been both rewarding and challenging. I’ve had to confront my own resistance to change, improve my ability to estimate work, and make tough prioritization decisions. While I’m still refining my approach, these challenges have helped me develop a more structured and adaptive mindset—something that will undoubtedly benefit me in future projects and professional work.



