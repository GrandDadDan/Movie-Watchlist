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

## 1️⃣1️⃣ Real-Time Updates  
- **Requirement:** The system shall update user watchlists and movie details in real time.  
- **Acceptance Criteria:**  
  - Changes made by a user must reflect instantly without requiring a page refresh.  
  - Movie availability must sync automatically when streaming services update their libraries.  

---

## 1️⃣2️⃣ Error Handling & Notifications  
- **Requirement:** The system shall provide meaningful error messages and notifications for failed actions.  
- **Acceptance Criteria:**  
  - Network errors must display a user-friendly message.  
  - Users must receive an email notification if their account is locked due to multiple failed login attempts.  

# 3. Non-Functional Requirements – Movie Watchlist App  

## 1️⃣ Usability  
- **The interface shall comply with WCAG 2.1 accessibility standards** to ensure users with disabilities can navigate the system.  
- **The system shall have an intuitive and responsive UI**, allowing users to interact seamlessly on both desktop and mobile devices.  
- **Tooltips and error messages shall be provided** to help users understand system functionality and troubleshoot issues.  

---

## 2️⃣ Deployability  
- **The system shall be deployable on cloud platforms such as Firebase Hosting** for seamless scalability.  
- **The frontend shall be deployable on static hosting services** like Vercel or Netlify for cost-effective distribution.  
- **The backend shall support deployment on AWS, Heroku, or DigitalOcean**, providing flexibility for future scalability.  

---

## 3️⃣ Maintainability  
- **The system documentation shall include an API guide** to assist developers with future integrations and feature expansions.  
- **The codebase shall follow industry best practices**, including modular structure and proper version control using Git.  
- **Automated testing shall be implemented** to detect and prevent breaking changes before deployment.  

---

## 4️⃣ Scalability  
- **The system shall support up to 1,000 concurrent users during peak hours** without performance degradation.  
- **Database queries shall be optimized to handle increasing user data efficiently**, ensuring fast retrieval of watchlists and movie details.  
- **The application architecture shall be designed to scale horizontally**, allowing additional backend instances to handle load spikes.  

---

## 5️⃣ Security  
- **All user authentication and sensitive data shall be encrypted using AES-256** to protect against unauthorized access.  
- **User authentication shall be managed through Firebase Authentication**, ensuring secure login with email/password and OAuth providers.  
- **The system shall enforce session expiration and automatic logout** after 30 minutes of inactivity to prevent unauthorized access.  

---

## 6️⃣ Performance  
- **Search results shall load within 2 seconds** for an optimal user experience.  
- **API response times shall be kept under 500ms** for movie data retrieval and watchlist management.  
- **The system shall cache frequently accessed movie data** to reduce redundant API calls and improve performance.  

---

## 7️⃣ Reliability  
- **The system shall have a 99.9% uptime guarantee**, ensuring minimal downtime for users.  
- **Automated backups shall be performed daily** to prevent data loss in case of system failure.  
- **Error handling mechanisms shall be implemented** to recover from unexpected failures gracefully.  

---

## 8️⃣ Compliance  
- **The system shall comply with GDPR regulations**, ensuring user data privacy and transparency.  
- **Users shall have the ability to delete their account and personal data** upon request in compliance with data protection laws.  
- **Logging and monitoring shall be enabled** to track system activity and detect security threats.  


