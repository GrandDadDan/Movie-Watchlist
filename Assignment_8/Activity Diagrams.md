## 🎯 Activity Diagrams for Movie Watchlist App Workflows

### 1. **User Registration**
```mermaid
%%{ init : { 'theme': 'default' } }%%
flowchart TD
    UserStart([Start]) --> A1[User fills registration form]
    A1 --> A2[Submit form]
    A2 --> System1[Validate input]
    System1 -->|Valid| System2[Create account in database]
    System2 --> System3[Send confirmation email]
    System3 --> A3[Show 'Check your email']
    System1 -->|Invalid| A4[Show error message]
    A3 --> UserEnd([End])
    A4 --> UserEnd
```

**Explanation**: This diagram represents the user registration workflow. The user fills and submits the form. The system validates the input and, if valid, creates the account and sends a confirmation email. If invalid, an error message is shown. This maps to **FR-001 (User Authentication)**.


---

### 2. **User Login**
```mermaid
flowchart TD
    UserStart([Start]) --> B1[Enter email and password]
    B1 --> System1[Validate credentials]
    System1 -->|Valid| B2[Redirect to dashboard]
    System1 -->|Invalid| B3[Display error message]
    B2 --> UserEnd([End])
    B3 --> UserEnd
```
**Explanation**: This diagram shows the login process. Upon entering credentials, the system checks them. If correct, the user is logged in; otherwise, an error is shown. Linked to **FR-001** and **FR-012**.

---

### 3. **Password Reset**
```mermaid
flowchart TD
    Start([Start]) --> C1[Click 'Forgot Password']
    C1 --> C2[Enter email]
    C2 --> System1[Check if account exists]
    System1 -->|Exists| System2[Send reset link to email]
    System1 -->|Doesn't exist| C3[Show 'Account not found']
    System2 --> C4[User resets password]
    C4 --> System3[Update password in DB]
    System3 --> C5[Show success message]
    C3 --> End([End])
    C5 --> End
```

**Explanation**: This covers the password recovery flow, verifying if the email exists and allowing the user to reset their password. Tied to **FR-001** and **FR-012**.

---

### 4. **Search Movies**
```mermaid
flowchart TD
    Start([Start]) --> D1[Enter search keyword]
    D1 --> System1[Query movie API]
    System1 -->|Results| D2[Display results to user]
    System1 -->|No results| D3[Show 'No matches found']
    D2 --> End([End])
    D3 --> End
```

**Explanation**: This illustrates the movie search functionality. Based on the input, results are shown or a no match message is returned. Maps to **FR-004 (Search & Discovery)**.

---

### 5. **Add Movie to Watchlist**
```mermaid
flowchart TD
    Start([Start]) --> E1[Click 'Add to Watchlist']
    E1 --> System1[Check if movie already in list]
    System1 -->|Not in list| System2[Add movie to DB]
    System1 -->|Already exists| E2[Show error message]
    System2 --> E3[Update UI]
    E3 --> End([End])
    E2 --> End
```

**Explanation**: This shows the user adding a movie to their watchlist. The system checks for duplicates before updating. Matches **FR-002 (Watchlists)**.


---

### 6. **Mark Movie as Watched**
```mermaid
flowchart TD
    Start([Start]) --> F1[Select movie from watchlist]
    F1 --> F2[Click 'Mark as Watched']
    F2 --> System1[Update status to 'Watched']
    System1 --> F3[Add watch date]
    F3 --> F4[Refresh UI with status]
    F4 --> End([End])
```

**Explanation**: This diagram marks a movie as watched and updates the watch date. Supports **FR-007 (Mark Movies as Watched)**.

---

### 7. **Check Streaming Availability**
```mermaid
flowchart TD
    Start([Start]) --> G1[Click 'Check Streaming']
    G1 --> System1[Call external API for availability]
    System1 -->|Available| G2[Show platforms]
    System1 -->|Unavailable| G3[Show 'Not available']
    G2 --> End([End])
    G3 --> End
```

**Explanation**: This activity checks where a movie is available for streaming using an external API. Supports **FR-006 (Streaming Platform Availability)**.


---

### 8. **Generate Movie Recommendations**
```mermaid
flowchart TD
    Start([Start]) --> H1[Click 'Get Recommendations']
    H1 --> System1[Analyze watch history]
    System1 -->|Sufficient data| H2[Display recommendations]
    System1 -->|Not enough data| H3[Show 'Add more movies']
    H2 --> End([End])
    H3 --> End
```

**Explanation**: This models how the system generates personalized movie recommendations. Depends on user history and supports **FR-008 (Recommendations)**.


---
