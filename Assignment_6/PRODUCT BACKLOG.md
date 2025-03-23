# Product Backlog

- [GITHUB TOOLS - PRODUCT BACKLOG TABLES](https://github.com/users/GrandDadDan/projects/3)

![image](https://github.com/user-attachments/assets/69dcfdd2-c62c-4734-b98c-8da4bb1d0741)

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

# Product Backlog Creation

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
