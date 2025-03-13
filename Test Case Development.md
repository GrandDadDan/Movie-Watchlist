# Test Case Development

| Test Case ID | Requirement ID | Description                                          | Steps                                                                                  | Expected Result                                            | Actual Result | Status (Pass/Fail) |
|--------------|----------------|------------------------------------------------------|----------------------------------------------------------------------------------------|------------------------------------------------------------|----------------|--------------------|
| TC001        | FR-001         | User switches to Dark Mode                           | 1. Log in to the system. 2. Navigate to settings. 3. Select "Dark Mode."              | System switches to dark mode with proper color scheme.     |                |                    |
| TC002        | FR-002         | User switches to Light Mode                          | 1. Log in to the system. 2. Navigate to settings. 3. Select "Light Mode."             | System switches to light mode with proper color scheme.    |                |                    |
| TC003        | FR-003         | User navigates the system with keyboard navigation   | 1. Log in to the system. 2. Navigate through pages using Tab/Shift+Tab.                | The system should allow smooth navigation using keyboard.   |                |                    |
| TC004        | FR-004         | User adds a movie to the watchlist                   | 1. Log in to the system. 2. Search for a movie. 3. Select a movie and click "Add to Watchlist." | Movie is added to the user's watchlist.                    |                |                    |
| TC005        | FR-005         | System displays movie search results within 2 seconds | 1. Log in to the system. 2. Enter a movie title in the search bar. 3. Click "Search."   | Search results are displayed within 2 seconds.             |                |                    |
| TC006        | FR-006         | User marks a movie as "Watched"                       | 1. Log in to the system. 2. Go to the watchlist. 3. Select a movie and click "Mark as Watched." | Movie is marked as "Watched" in the watchlist.             |                |                    |
| TC007        | FR-007         | User views movie details                             | 1. Log in to the system. 2. Select a movie from the watchlist. 3. Click on the movie title. | Movie details (cast, description, etc.) are displayed.     |                |                    |
| TC008        | FR-008         | System responds to movie data request within 500 milliseconds | 1. Log in to the system. 2. Enter a movie title in the search bar. 3. Click "Search."   | The API responds with movie data in ≤ 500 milliseconds.    |                |                    |

### Non-Functional Test Cases

#### 1. Usability Test

| Test Case ID | Requirement ID | Description                                          | Steps                                                                                  | Expected Result                                            | Actual Result | Status (Pass/Fail) |
|--------------|----------------|------------------------------------------------------|----------------------------------------------------------------------------------------|------------------------------------------------------------|----------------|--------------------|
| TC009        | NF-001         | Verify dark mode and light mode toggle               | 1. Log in to the system. 2. Navigate to settings. 3. Toggle between dark mode and light mode. | System switches between dark and light modes smoothly.     |                |                    |

#### 2. Performance Test

| Test Case ID | Requirement ID | Description                                          | Steps                                                                                  | Expected Result                                            | Actual Result | Status (Pass/Fail) |
|--------------|----------------|------------------------------------------------------|----------------------------------------------------------------------------------------|------------------------------------------------------------|----------------|--------------------|
| TC010        | NF-002         | Search results load within 2 seconds under load      | 1. Simulate 1,000 concurrent users searching for movies. 2. Measure response time.      | The response time for search results should be ≤ 2 seconds. |                |                    |

#### 3. Scalability Test

| Test Case ID | Requirement ID | Description                                          | Steps                                                                                  | Expected Result                                            | Actual Result | Status (Pass/Fail) |
|--------------|----------------|------------------------------------------------------|----------------------------------------------------------------------------------------|------------------------------------------------------------|----------------|--------------------|
| TC011        | NF-003         | Verify the system can handle 1,000 concurrent users | 1. Simulate 1,000 concurrent users accessing the system. 2. Measure system performance and load. | The system should handle up to 1,000 concurrent users without significant degradation. |                |                    |

#### 4. Security Test

| Test Case ID | Requirement ID | Description                                          | Steps                                                                                  | Expected Result                                            | Actual Result | Status (Pass/Fail) |
|--------------|----------------|------------------------------------------------------|----------------------------------------------------------------------------------------|------------------------------------------------------------|----------------|--------------------|
| TC012        | NF-004         | Verify encryption of user data                       | 1. Register or log in as a user. 2. Inspect the database or network traffic for sensitive data. | User data, including passwords, should be encrypted using AES-256. |                |                    |

---
