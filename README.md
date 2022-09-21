# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Run this command in /src directory to launch app.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Run this command in /src directory to run tests.

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Approach
- Extracted days from dataset.
- Pushed days into corresponding arrays & used .length method to get the number of times each day appears in dataset.
- Displays either bar chart or line graph (depending on user preference, set with toggle) with each day (Monday-Sunday) & the optimal day being determined by the highest number of times a day appears in the dataset.
## Limitations
 - Styling limitations/complexities with Chart.js library.
 - Only shows optimal Day and not time.

 ## Potential Improvements with more time
 - Showing a seperate visual for optimal time in addition to optimal day. 
 - Further research into Chart.js library to fully utilise all features.
 - Mock api call.
