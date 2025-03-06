# 🎬 Movie Watchlist App - System Requirements Document (SRD)

## 📌 1. Stakeholder Analysis

| Stakeholder           | Role in the System                                  | Key Concerns                                           | Pain Points                                        | Success Metrics                                              |
|-----------------------|----------------------------------------------------|--------------------------------------------------------|--------------------------------------------------|--------------------------------------------------------------|
| 🎭 **End User**        | Uses the app to track and organize movies         | Easy movie tracking, personalized recommendations      | Losing track of movies, no cross-platform sync   | Increased user retention, high app engagement                 |
| 🔐 **Administrator**   | Manages backend, user data, and system updates    | System stability, security, and user support           | Handling user issues manually, downtime concerns | High system uptime, low support requests                      |
| 🔍 **Content Curator** | Suggests trending movies and updates recommendations| Relevant and accurate movie recommendations             | Lack of customization, outdated movie suggestions | Increased user interaction with recommendations               |
| 🔌 **Third-Party API Provider (TMDb)** | Provides movie details (ratings, cast, trailers) | API stability, accurate data retrieval                   | High API call load, rate limits exceeded           | Minimal API downtime, fast response times                    |
| 💾 **Database Provider (Firebase)** | Stores user data, watchlists, and authentication info | Secure and efficient data storage                      | Slow database queries, security risks            | Fast data retrieval, zero security breaches                  |
| 🏗️ **Developers**      | Build and maintain the system                      | Code maintainability, API integration                  | Debugging performance issues, unclear requirements | Clean code, fast issue resolution                            |

---

## 📌 2. Functional Requirements

1. **The system shall allow users to create an account and log in using email/password authentication.**  
2. **The system shall allow users to add, remove, and update movies in their watchlist.**  
3. **The system shall fetch movie details (title, rating, cast, trailer) from the TMDb API.**  
4. **The system shall provide search functionality to find movies by title, genre, or release year.**  
5. **The system shall allow users to mark movies as "watched" and filter watchlists accordingly.**  
6. **The system shall allow users to categorize their watchlist (e.g., "Must Watch," "Watch Later").**  
7. **The system shall recommend movies based on the user’s watch history.**  
8. **The system shall allow users to delete their account and associated data upon request.**  
9. **The system shall notify users about upcoming movie releases based on their preferences.**  
10. **The system shall allow administrators to manage reported content or abusive users.**

---

## 📌 3. Non-Functional Requirements

### 🖥️ Usability  
- **The system shall provide a dark mode and light mode option** for user comfort and preference.  
- **The system shall comply with WCAG 2.1 accessibility standards** to ensure it is usable by people with disabilities.  

### ☁️ Deployability  
- **The system shall be deployable on cloud platforms such as Firebase Hosting** to ensure scalable hosting.  
- **The backend shall support deployment on AWS, Heroku, or DigitalOcean** to ensure flexibility in server infrastructure.  

### 🛠️ Maintainability  
- **The codebase shall be modular and follow industry best practices** for easy updates and maintenance.  
- **The system shall include an API guide in the documentation** to assist with future integrations or system extensions.  

### 📈 Scalability  
- **The system shall support up to 1,000 concurrent users** during peak hours, without performance degradation.  
- **Database queries shall be optimized** to handle increasing user data and traffic efficiently.  

### 🔒 Security  
- **All user authentication data and sensitive information shall be encrypted using AES-256** to prevent unauthorized access.  
- **The system shall implement multi-factor authentication (MFA)** to enhance user security.  

### ⚡ Performance  
- **The system shall display search results within 2 seconds** to ensure a responsive user experience.  
- **API response times for fetching movie data shall be under 500ms** to provide a smooth user interaction with the app.  

---

