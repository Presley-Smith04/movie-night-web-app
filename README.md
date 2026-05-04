# Movie Night App

This is a simple movie browsing web app that was built using JavaScript and the TMDB API.  
Users can browse popular movies, search for specific titles, and view detailed information about each movie.

---

## Project Overview

This project was built to demonstrate:
- Front end development skills using JavaScript
- API integration and data handling
- UI/UX decisions and component structure
- Clean code organization and separation of concerns

The app interacts with the **TMDB API** to fetch real-time movie data.

---

## Features

### Movie Browsing
- Displays a grid of popular movies on load
- Each movie card shows:
  - Poster image
  - Title
  - Average rating

### Search Functionality
- Users can search for movies by title
- Results update dynamically as the user types

### Movie Details View
- Clicking a movie opens a detailed view showing:
  - Title
  - Overview / description
  - Rating
  - Release date
  - Top cast members

### Navigation
- Back button allows users to return to the main movie grid

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- TMDB API (https://developer.themoviedb.org/)

---

## API Setup

This project uses the TMDB API.

1. Create your account at https://developer.themoviedb.org/
2. Generate an API key
3. Add your API key in `api.js`:
