# Eat The Rainbow

I created this web app to serve those who utilize popular color-coded portion-control containers as their way of eating. Users can search and filter recipes by container color, meal category, dietary needs, etc. to gain inspiration on meal planning. Actual recipe ingredients and directions purposely omitted as they are not mine to share; simply the container counts and source.

## How to Use

The official Eat The Rainbow app can be found here: https://etr.nicolesmith.dev

### Local Setup

-   `client` Directory
    -   `nvm use 20`
    -   `npm install`
-   Root Directory
    -   `nvm use 20`
    -   `npm install`
    -   `npm run dev`
-   `config` Directory
    -   Duplicate `prod.js` and name it `dev.js`
    -   Insert your MongoDB connection string for the `mongoURI` key

### Build

-   `client` Directory
    -   `nvm use 20`
    -   `npm run build`
    -   Upload `dist` folder into `client/dist` folder on server
-   `root` Directory
    -   Upload any changed files from `config`, `models`, `index.js`, or `package.json` to root directory
-   Confirm environment variable `MONGO_URI` exists

## Future Updates

This is my first and on-going MERN (MongoDB, Express, React, Node) project. Eventually I would like to implement the following enhancements:

1. Add authentication to add user rating abilities, "Most Popular"
2. Sort by recently added

## Changelog

February 7, 2026

-   Security: remove `node-sass` npm package in favor of `sass`
-   Upgrade Sass syntax

November 19, 2022

-   Refactor form fields

November 17, 2022

-   Add (development mode only) form interface (with [react-final-forms](https://www.npmjs.com/package/react-final-form)) at new `/admin/new` route to easily add recipes via new `/api/new` endpoint
-   Fix non-existent routes to redirect to homepage

July 27, 2022

-   Fix category filtering so results show recipes that include one or more selected categories

July 26, 2022

-   Improve pagination with [react-paginate](https://www.npmjs.com/package/react-paginate)

July 25, 2022

-   Refactor app to connect to a NodeJS and Express backend, serving the data from MongoDB

February 12, 2022

-   Add Google Analytics event tracking for search queries, filter toggling, and pagination

December 29, 2021

-   Security: upgrade npm packages to Node 16
-   Security: upgrade React from v16 to 17

August 21, 2021

-   Install Redux and React Redux to better manage state
