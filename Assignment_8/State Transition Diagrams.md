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


```mermaid

stateDiagram-v2
    [*] --> Empty
    Empty --> Populated : User adds movies
    Populated --> Empty : All movies removed
    Populated --> Shared : User generates share link
    Shared --> Populated : User adds/removes movies


```

