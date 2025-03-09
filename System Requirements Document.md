# 1. Stakeholder Analysis – Movie Watchlist App  

## 1️⃣ End Users (Movie & TV Enthusiasts)  
- **Role:** Primary users who track and manage their watchlists.  
- **Key Concerns:**  
  - Easy-to-use interface for adding and organizing movies.  
  - Accurate movie details, including trailers, ratings, and recommendations.  
- **Pain Points:**  
  - Difficult to remember and track movies across different platforms.  
  - No centralized solution for organizing watchlists.  
- **Success Metrics:**  
  - Increased user engagement (e.g., active users logging in weekly).  
  - High user satisfaction ratings (e.g., 90%+ positive feedback).  

---

## 2️⃣ Content Creators & Film Reviewers  
- **Role:** Use the app to organize and review movies for their audience.  
- **Key Concerns:**  
  - Ability to categorize movies by review status.  
  - Integration with movie databases for accurate information.  
- **Pain Points:**  
  - Manually tracking movies they’ve watched and reviewed is time-consuming.  
  - Lack of tools for sharing lists with followers.  
- **Success Metrics:**  
  - Faster review workflow (e.g., reducing manual tracking effort by 50%).  
  - Increased watchlist sharing and engagement.  

---

## 3️⃣ Streaming Service Users  
- **Role:** Users who track movies across multiple platforms (Netflix, Disney+, etc.).  
- **Key Concerns:**  
  - Ability to tag where a movie is available for streaming.  
  - Notifications for when a movie becomes available on a preferred service.  
- **Pain Points:**  
  - Forgetting which platform a movie is on.  
  - No way to track availability changes across multiple services.  
- **Success Metrics:**  
  - High adoption of platform-tagging features.  
  - Increase in session duration (users spending more time in the app).  

---

## 4️⃣ Developers & System Administrators  
- **Role:** Maintain and enhance the system’s performance and stability.  
- **Key Concerns:**  
  - Scalable and efficient backend (Node.js + Firebase).  
  - Secure and reliable authentication system.  
- **Pain Points:**  
  - Managing API rate limits (TMDb).  
  - Ensuring real-time updates without performance issues.  
- **Success Metrics:**  
  - 99.9% uptime.  
  - Fast API response times (<200ms).  

---

## 5️⃣ API Providers (TMDb / IMDb / Firebase)  
- **Role:** Provide movie data and authentication services.  
- **Key Concerns:**  
  - High-quality movie metadata and search functionality.  
  - Prevent API abuse and maintain fair usage.  
- **Pain Points:**  
  - Handling a large number of API requests.  
  - Ensuring consistent and updated movie data.  
- **Success Metrics:**  
  - 100% compliance with API usage policies.  
  - Accurate movie data fetched with minimal delays.  

---

## 6️⃣ Future Investors / Project Evaluators  
- **Role:** Assess the feasibility and growth potential of the app.  
- **Key Concerns:**  
  - Proof of concept and market validation.  
  - Potential monetization models (ads, premium features).  
- **Pain Points:**  
  - Lack of a clear business model.  
  - Need for user growth and retention data.  
- **Success Metrics:**  
  - High user retention (e.g., 70%+ returning users).  
  - Positive project evaluation from university. 

# 2. Functional Requirements – Movie Watchlist App  

## 1️⃣ User Authentication  
- **Requirement:** The system shall allow users to sign up, log in, and log out using email and password authentication.  
- **Acceptance Criteria:**  
  - Users must receive a confirmation email upon successful registration.  
  - Incorrect login attempts should display an error message.  

---

## 2️⃣ Personalized Watchlists  
- **Requirement:** The system shall allow users to create, update, and delete personalized movie watchlists.  
- **Acceptance Criteria:**  
  - Users must be able to add movies to their watchlist with a single click.  
  - Users must be able to categorize movies (e.g., "To Watch," "Watched," "Favorites").  

---

## 3️⃣ Movie Search & Discovery  
- **Requirement:** The system shall allow users to search for movies by title, genre, release year, or rating.  
- **Acceptance Criteria:**  
  - Search results must be retrieved in under 2 seconds.  
  - Each result must include the movie poster, title, release date, and rating.  

---

## 4️⃣ Movie Details Page  
- **Requirement:** The system shall display detailed movie information, including trailers, cast, synopsis, and ratings.  
- **Acceptance Criteria:**  
  - Clicking on a movie should open a details page.  
  - The details page must include a "Back to Search" button.  

---

## 5️⃣ Watchlist Sharing  
- **Requirement:** The system shall allow users to share their watchlists via a unique link.  
- **Acceptance Criteria:**  
  - Watchlists must have public and private visibility settings.  
  - Shared watchlists must be accessible without requiring a login.  

---

## 6️⃣ Streaming Platform Availability  
- **Requirement:** The system shall display where a movie is available for streaming (e.g., Netflix, Hulu, Disney+).  
- **Acceptance Criteria:**  
  - The system must fetch real-time streaming availability via an external API.  
  - Availability must be updated at least once per day.  

---

## 7️⃣ Marking Movies as Watched  
- **Requirement:** The system shall allow users to mark movies as "Watched" and track their progress.  
- **Acceptance Criteria:**  
  - Users must see a "Watched" indicator on completed movies.  
  - The app must display the watch date and rating (if given).  

---

## 8️⃣ Personalized Movie Recommendations  
- **Requirement:** The system shall suggest movies based on the user’s watchlist and viewing history.  
- **Acceptance Criteria:**  
  - Recommendations must be based on genre, rating, and similar user preferences.  
  - The recommendation engine must update weekly.  

---

## 9️⃣ Responsive Web Interface  
- **Requirement:** The system shall be fully responsive and work across desktops, tablets, and mobile devices.  
- **Acceptance Criteria:**  
  - The UI must dynamically adjust based on screen size.  
  - All features must be accessible via touch controls on mobile.  

---

## 🔟 Secure Data Storage  
- **Requirement:** The system shall securely store user data and authentication details in Firebase.  
- **Acceptance Criteria:**  
  - Passwords must be encrypted and not stored in plaintext.  
  - Users must be automatically logged out after 30 minutes of inactivity.  

---

## 1️⃣.1️⃣ Real-Time Updates  
- **Requirement:** The system shall update user watchlists and movie details in real time.  
- **Acceptance Criteria:**  
  - Changes made by a user must reflect instantly without requiring a page refresh.  
  - Movie availability must sync automatically when streaming services update their libraries.  

---

## 1️⃣.2️⃣ Error Handling & Notifications  
- **Requirement:** The system shall provide meaningful error messages and notifications for failed actions.  
- **Acceptance Criteria:**  
  - Network errors must display a user-friendly message.  
  - Users must receive an email notification if their account is locked due to multiple failed login attempts.  

# 3. Non-Functional Requirements – Movie Watchlist App   

## 1️⃣ Usability  
- **The system shall provide a dark mode and light mode option** to enhance the user experience and reduce eye strain.  
- **The interface shall comply with WCAG 2.1 accessibility standards**, ensuring support for screen readers and keyboard navigation.  

---

## 2️⃣ Deployability  
- **The system shall be deployable on cloud platforms such as Firebase Hosting** for cost-effective and scalable deployment.  

---

## 3️⃣ Maintainability  
- **The codebase shall be modular and follow industry best practices**, ensuring ease of future enhancements and debugging.  
- **The system shall include automated unit and integration tests**, guaranteeing the stability of core functionalities.  

---

## 4️⃣ Scalability  
- **It is possible for the system to support up to 1,000 concurrent users** without experiencing significant performance degradation.  
- **Database queries shall be optimized using indexing and caching techniques** to improve response times under high load.  

---

## 5️⃣ Security  
- **All sensitive user data, including passwords, shall be encrypted using AES-256** to prevent unauthorized access.  
- **The system shall enforce role-based access control (RBAC)** to restrict administrative functions from regular users.  

---

## 6️⃣ Performance  
- **Search results shall be displayed within 2 seconds** for an optimal user experience.  
- **The aim is for the API shall respond to movie data requests within 500 milliseconds** to maintain smooth interaction between frontend and backend.  



