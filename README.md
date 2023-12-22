# Trending Movies App - README

# Live Demo of [Trending Movies App](https://movie-app-remix.netlify.app/)

## Overview

This application, built using Remix JS, offers a seamless and interactive way to explore trending movies. It fetches data from TheMovieDB API to display a curated list of trending movies. Users can view key details of each movie, and engage through a comment section for individual movie reviews.

## Features

- **Trending Movies List**: The app showcases a list of trending movies, each displayed in a distinct block.
- **Movie Details**: Clicking on a movie redirects to a detailed page with extensive information about the selected movie.
- **Comment Section**: Each movie's detailed page includes a comment section where users can post their reviews and engage in discussions.
- **Responsive Design**: Tailored for various devices using Tailwind CSS for a clean, modern user interface.

## Technology Stack

- **Remix JS**: For the overall app structure and routing.
- **TheMovieDB API**: To fetch the latest trending movies data.
- **Prisma IO**: Used for database management to handle user comments.
- **Tailwind CSS**: For styling and designing the application.

## Installation

1. Clone the repository: `gh repo clone lazirpascual/movies-app-remix`
2. Install dependencies: `npm install`
3. Start the application: `npm run dev`
4. Open `http://localhost:3000` in your browser.

## Usage

- **Viewing Movies**: Browse through the list of trending movies on the home page.
- **Movie Details**: Click on any movie block to view more details.
- **Adding Comments**: On the movie's detail page, scroll to the comment section to read or add reviews.

## API Configuration

- Obtain an API key from TheMovieDB.org.
- Add the API key to the `.env` file in the root directory.
