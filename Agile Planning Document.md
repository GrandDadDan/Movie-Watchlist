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
