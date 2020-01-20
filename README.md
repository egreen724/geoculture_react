# GeoCulture React/Redux App

## Table of Contents
* [Motivation and Features](#movtivation-and-features)
* [Technologies](#Technologies)
* [Setup](#Setup)
* [Illustrations](#Illustrations)

## Motivation and Features
GeoCulture was created as a portfolio project in the Flatiron School's Full Stack Software Engineering program.  The goal was to create an app with a React/Redux frontend and a Rails backend, applying my knowledge of ES6 and global state storage. The GeoCulture database was seeded using the Artsy.net public API and allows a user to filter the artwork in the database by location and save artwork to a "Favorites" list. This tool is meant to simplify travel planning and pulls information from museums around the world.

Future additions: Currently, GeoCulture is built with only one model (Artworks) but I plan to eventually add a User model and user authentication.

## Technologies

* React
* Redux
* Rails 5.2.3
* ES6
* ActiveRecord
* Redux Thunk
* JSON


## Setup

1. Ensure that your system is running the correct versions of Rails and Ruby.
2. Clone into the repository and change directories into "geoculture_react".
3. Run rake db:migrate.
4. Run "rake start" to open the app in your browser.

## Illustrations

![Planning](https://i.imgur.com/sgFJdyO.png)
![Wireframes](https://i.imgur.com/z9OXqKH.png)
![Homepage Screenshot](https://i.imgur.com/DKotuE8.png)
