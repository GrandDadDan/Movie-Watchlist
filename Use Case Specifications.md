# Use Case Specifications

## 1. User Authentication
**Actor:** User  
**Precondition:** The user must have an existing account or be ready to register.  
**Postcondition:** The user is logged in and has access to the system.  

### Basic Flow:
1. User navigates to the login page.  
2. User enters username and password.  
3. System validates credentials.  
4. System logs in the user and redirects to the homepage.  

### Alternative Flows:
- If the credentials are invalid, the system displays an error message: "Invalid username or password."  
- If the user forgets their password, they can click "Forgot Password" to reset it.

---

## 2. Manage Watchlists
**Actor:** User  
**Precondition:** The user must be authenticated and logged in.  
**Postcondition:** The user's watchlist is updated with new movies or shows.  

### Basic Flow:
1. User navigates to the watchlist management page.  
2. User selects "Add Movie" or "Remove Movie."  
3. System updates the watchlist accordingly.  
4. System displays the updated watchlist to the user.  

### Alternative Flows:
- If the user tries to add a movie that is already in the watchlist, the system shows an error message: "Movie already in your watchlist."

---

## 3. Search & Discover Movies
**Actor:** User  
**Precondition:** The user must be logged in or browsing anonymously.  
**Postcondition:** A list of movies based on search criteria is displayed.  

### Basic Flow:
1. User enters a search query (e.g., movie name or genre).  
2. System queries the movie database.  
3. System displays a list of matching movies.  
4. User selects a movie from the list for more details.  

### Alternative Flows:
- If no results are found, the system displays a message: "No movies found for your query."

---

## 4. View Movie Details
**Actor:** User  
**Precondition:** The user must have selected a movie from the search results or watchlist.  
**Postcondition:** The user views detailed information about the movie.  

### Basic Flow:
1. User clicks on a movie title.  
2. System retrieves movie details such as genre, cast, director, and description.  
3. System displays movie information on a new page.  

### Alternative Flows:
- If the movie information is unavailable, the system displays a message: "Details not available for this movie."

---

## 5. Mark Movies as Watched
**Actor:** User  
**Precondition:** The user must be logged in and have the movie in their watchlist.  
**Postcondition:** The movie is marked as "Watched" in the user's watchlist.  

### Basic Flow:
1. User navigates to their watchlist.  
2. User selects a movie to mark as watched.  
3. System updates the movie's status to "Watched."  
4. System reflects the change in the user's watchlist.  

### Alternative Flows:
- If the movie is already marked as watched, the system displays a message: "This movie is already marked as watched."

---

## 6. Receive Movie Recommendations
**Actor:** User  
**Precondition:** The user must be logged in and have a sufficient movie history for the system to base recommendations.  
**Postcondition:** The user receives a list of recommended movies based on their preferences.  

### Basic Flow:
1. User selects the "Recommendations" section.  
2. System analyzes the user's viewing history and preferences.  
3. System generates a list of recommended movies.  
4. System displays the recommendations to the user.  

### Alternative Flows:
- If the system cannot generate recommendations due to lack of data, it shows: "No recommendations available at this time."

---

## 7. Check Streaming Availability
**Actor:** User  
**Precondition:** The user must be logged in or browsing a movie's details.  
**Postcondition:** The system displays streaming service availability for the selected movie.  

### Basic Flow:
1. User views the details of a movie.  
2. User selects "Check Streaming Availability."  
3. System queries streaming services to determine where the movie is available.  
4. System displays a list of available streaming platforms.  

### Alternative Flows:
- If the movie is unavailable on any streaming platform, the system displays: "Movie not available on any streaming service."

---

## 8. Administer System
**Actor:** System Administrator  
**Precondition:** The administrator must be logged in with the necessary permissions.  
**Postcondition:** The system is updated, and the administrator's changes are reflected.  

### Basic Flow:
1. System Administrator logs in to the administration panel.  
2. Administrator selects a management task (e.g., add/remove users, update database).  
3. System processes the administrator's request.  
4. System displays confirmation of the completed action.  

### Alternative Flows:
- If the administrator attempts an unauthorized action, the system shows an error message: "You do not have permission to perform this action."

