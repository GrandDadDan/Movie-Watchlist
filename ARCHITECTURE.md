<h1>Movie Watchlist</h1>

<h2>Description</h2>
<p>The Movie Watchlist app is a web-based application that helps users manage and track movies they want to watch. Users can add movies to a personalized watchlist, mark them as watched, and categorize them by genre or priority. The app will also feature user authentication, real-time updates, and optional movie recommendations.</p>


<h2>C4 Context Diagram:</h2>

```mermaid

C4Context
    title Movie Watchlist App - System Context
    Person(user, "User", "A person who uses the app to manage their movie watchlist.")
    System(movieWatchlistApp, "Movie Watchlist App", "A platform to track, organize, and discover movies and TV shows.")
    System_Ext(tmdbAPI, "TMDb API", "Provides movie data like ratings, trailers, and cast information.")
    System_Ext(firebase, "Firebase", "A backend service for authentication and database management.")

    Rel(user, movieWatchlistApp, "Uses")
    Rel(movieWatchlistApp, tmdbAPI, "Fetches movie details")
    Rel(movieWatchlistApp, firebase, "Stores user data and handles authentication")

    UpdateElementStyle(user, $fontColor="white", $bgColor="#1f77b4", $borderColor="#1f77b4")
    UpdateElementStyle(movieWatchlistApp, $fontColor="white", $bgColor="#ff7f0e", $borderColor="#ff7f0e")
    UpdateElementStyle(tmdbAPI, $fontColor="white", $bgColor="#2ca02c", $borderColor="#2ca02c")
    UpdateElementStyle(firebase, $fontColor="white", $bgColor="#d62728", $borderColor="#d62728")

    UpdateRelStyle(user, movieWatchlistApp, $textColor="grey", $lineColor="#17becf", $offsetY="-10")
    UpdateRelStyle(movieWatchlistApp, tmdbAPI, $textColor="grey", $lineColor="#bcbd22", $offsetY="-10")
    UpdateRelStyle(movieWatchlistApp, firebase, $textColor="grey", $lineColor="#7f7f7f", $offsetY="-10")

    UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")



```

<h2>C4 Container Diagram:</h2> 

```mermaid

C4Container
    title Movie Watchlist App - Container Diagram
    System_Boundary(app, "Movie Watchlist App") {
        Container(webApp, "Web Application", "React", "Frontend interface where users interact with the app.")
        Container(api, "API Server", "Node.js", "Handles backend logic, user authentication, and communication with external services.")
        ContainerDb(database, "Firebase Database", "Firebase", "Stores user data, watchlists, and authentication info.")
    }
    System_Ext(tmdbAPI, "TMDb API", "Provides movie data.")
    
    Rel(webApp, api, "Uses API for movie details and watchlist management")
    Rel(api, database, "Reads/Writes user data")
    Rel(api, tmdbAPI, "Fetches movie data")

    UpdateElementStyle(webApp, $fontColor="white", $bgColor="#3498db", $borderColor="#2980b9")
    UpdateElementStyle(api, $fontColor="white", $bgColor="#e74c3c", $borderColor="#c0392b")
    UpdateElementStyle(database, $fontColor="white", $bgColor="#9b59b6", $borderColor="#8e44ad")
    UpdateElementStyle(tmdbAPI, $fontColor="white", $bgColor="#f1c40f", $borderColor="#f39c12")

    UpdateRelStyle(webApp, api, $textColor="grey", $lineColor="#1abc9c", $offsetY="-10")
    UpdateRelStyle(api, database, $textColor="grey", $lineColor="#f39c12", $offsetY="-10")
    UpdateRelStyle(api, tmdbAPI, $textColor="grey", $lineColor="#6f7f7f", $offsetY="-10")

    UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")

```

<h2>C4 Component Diagram: </h2>

```mermaid

C4Component
    title Movie Watchlist App - Component Diagram

    Container(webApp, "Web Application", "React", "Frontend interface where users interact with the app.") 
    Container(api, "API Server", "Node.js", "Handles backend logic.") 

    Component(authComponent, "Authentication Component", "React", "Handles user login and registration.")
    Component(watchlistComponent, "Watchlist Component", "React", "Allows users to manage their movie watchlist.")
    Component(movieInfoComponent, "Movie Info Component", "React", "Displays movie details fetched from the backend.")
    
    Rel(authComponent, api, "Sends authentication requests")
    Rel(watchlistComponent, api, "Manages watchlist items")
    Rel(movieInfoComponent, api, "Fetches movie data")

    UpdateElementStyle(webApp, $fontColor="white", $bgColor="#3498db", $borderColor="#2980b9")
    UpdateElementStyle(api, $fontColor="white", $bgColor="#e67e22", $borderColor="#d35400")
    UpdateElementStyle(authComponent, $fontColor="white", $bgColor="#2ecc71", $borderColor="#27ae60")
    UpdateElementStyle(watchlistComponent, $fontColor="white", $bgColor="#9b59b6", $borderColor="#8e44ad")
    UpdateElementStyle(movieInfoComponent, $fontColor="white", $bgColor="#f1c40f", $borderColor="#f39c12")

    UpdateRelStyle(authComponent, api, $textColor="grey", $lineColor="#1abc9c", $offsetY="-10")
    UpdateRelStyle(watchlistComponent, api, $textColor="grey", $lineColor="#f39c12", $offsetY="-10")
    UpdateRelStyle(movieInfoComponent, api, $textColor="grey", $lineColor="#3498db", $offsetY="-10")

    UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")

```

<h2>C4 Deployment Diagram:</h2>

```mermaid

C4Deployment
    title Movie Watchlist App - Deployment Diagram
    
    Node(webServer, "Web Server", "Hosts the React application") {
        Container(webApp, "Web Application", "React", "Frontend interface where users interact with the app.")
    }
    
    Node(appServer, "App Server", "Node.js Backend Server") {
        Container(api, "API Server", "Node.js", "Handles backend logic and communicates with Firebase and TMDb API.")
    }

    Node(firebaseCloud, "Firebase Cloud", "Firebase") {
        Container(database, "Firebase Database", "Firebase", "Stores user data and watchlists.")
    }

    Node(tmdbCloud, "TMDb Cloud", "TMDb API") {
        Container(tmdbAPI, "TMDb API", "TMDb", "Provides movie data including ratings, cast, and trailers.")
    }

    Rel(webApp, api, "Uses API for movie data and watchlist management")
    Rel(api, database, "Reads/Writes data to Firebase")
    Rel(api, tmdbAPI, "Fetches movie data from TMDb")
