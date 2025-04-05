# 🎬 1. User Account
```mermaid

stateDiagram-v2
    [*] --> Registered
    Registered --> Active : Email confirmed
    Active --> Locked : Too many failed logins
    Active --> Deleted : User deletes account
    Locked --> Active : Password reset
    Locked --> Deleted : Admin removes account


```

---

# 🔍 Explanation
Registered: After sign-up but before email confirmation.

Active: Fully functional user account.

Locked: Triggered by multiple failed login attempts.

Deleted: Account removal.

Maps to:

FR-001 (User Authentication)

FR-012 (Error Handling & Notifications)

---

# 🎥 2. Movie

```mermaid

stateDiagram-v2
    [*] --> Available
    Available --> Watched : User marks as watched
    Available --> Removed : Movie removed from database
    Watched --> Removed : Admin deletes movie entry

```

# 🔍 Explanation
Available: Movie can be added to watchlist.

Watched: User has completed viewing.

Removed: Deleted from system.

Maps to:

FR-007 (Mark Movies as Watched)

FR-003 (Personalized Watchlists)

---

# 📄 3. Watchlist

```mermaid

stateDiagram-v2
    [*] --> Empty
    Empty --> Populated : User adds movies
    Populated --> Empty : All movies removed
    Populated --> Shared : User generates share link
    Shared --> Populated : User adds/removes movies


```

#🔍 Explanation
Empty: No movies added yet.

Populated: Contains one or more movies.

Shared: Watchlist is publicly viewable via a link.

Maps to:

FR-002 (Personalized Watchlists)

FR-005 (Watchlist Sharing)

---

# 🔎 4. Search Request
```mermaid

stateDiagram-v2
    [*] --> Searching
    Searching --> ResultsAvailable : Matches found
    Searching --> NoResults : No matches
    ResultsAvailable --> Selected : User views movie details


```

# 🔍 Explanation
Searching: System processes the query.

ResultsAvailable: Movies matched.

NoResults: Query returned no items.

Selected: User clicked on a movie.

Maps to:

FR-004 (Search & Discovery)

FR-010 (Responsive Interface)

---

# 🎞️ 5. Movie Details View

```mermaid

stateDiagram-v2
    [*] --> Viewing
    Viewing --> BackToSearch : User returns
    Viewing --> Error : Data fetch fails

```

# 🔍 Explanation
Viewing: User is on the movie detail page.

BackToSearch: Navigates back to search.

Error: Failed to load data.

Maps to:

FR-004 (Movie Details Page)

FR-012 (Error Handling & Notifications)

---

# 📡 6. Streaming Availability Check

```mermaid

stateDiagram-v2
    [*] --> Fetching
    Fetching --> Available : Found on platforms
    Fetching --> NotAvailable : No platforms matched
    Available --> Stale : API response outdated
    Stale --> Fetching : Auto-refresh

```

# 🔍 Explanation
Fetching: System checks external API.

Available: Movie is on a streaming service.

NotAvailable: None found.

Stale: Outdated data (triggered for daily update).

Maps to:

FR-006 (Streaming Availability)

FR-011 (Real-Time Updates)

---

# 🤖 7. Recommendation Engine

```mermaid

stateDiagram-v2
    [*] --> Analyzing
    Analyzing --> Ready : Sufficient data
    Analyzing --> InsufficientData : Not enough history
    Ready --> Refreshed : Weekly update
    Refreshed --> Ready

```

# 🔍 Explanation
Analyzing: Engine evaluates user's watch history.

Ready: Recommendations generated.

InsufficientData: Too little data to analyze.

Refreshed: Weekly refresh cycle.

Maps to:

FR-008 (Personalized Recommendations)

FR-011 (Real-Time Updates)
