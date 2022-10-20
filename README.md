## Eat The Rainbow

I created this web app to serve those who utilize a popular color-coded portion-control containers as their way of eating. Users can search and filter recipes by container color, meal category, dietary needs, etc. to gain inspiration on meal planning. Actual recipe ingredients and directions are not available; simply the container counts and source.

### How to Use

The official Eat The Rainbow app can be found here: https://eattherainbow.recipes

#### Local Setup

-   `client` Directory
    -   `npm install`
-   Root Directory
    -   `npm install`
    -   `npm run dev`

### Future Updates

This is my first and on-going MERN (MongoDB, Express, React, Node) project. Eventually I would like to implement the following enhancements:

1. Add authentication to add user rating abilities, "Most Popular"
2. Sort by recently added

## Changelog

July 27, 2022

-   Fix category filtering so results show recipes that include one or more selected categories

July 26, 2022

-   Improved pagination with the help of [react-paginate](https://www.npmjs.com/package/react-paginate)

July 25, 2022

-   Refactored the app to connect to a NodeJS and Express backend, serving the data from MongoDB

February 12, 2022

-   Implemented Google Analytics event tracking for search queries, filter toggling, and pagination

December 29, 2021

-   Upgraded npm packages to Node 16 compatibility
-   Upgraded React from v16 to 17

August 21, 2021

-   Installed Redux and React Redux to better manage state.
