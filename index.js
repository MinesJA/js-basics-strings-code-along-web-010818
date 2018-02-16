// Write your code in this file!

const currentUser = 'Jon';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`




//     at Context.it (test/indexTest.js:37:14)
// shortGreeting
// contains "Welcome, " ‣
// ReferenceError: shortGreeting is not defined
//     at Context.it (test/indexTest.js:43:14)
// contains the first initial of the name stored in the 'currentUser' variable ‣
// ReferenceError: currentUser is not defined
//     at Context.it (test/indexTest.js:47:28)
// ends with an exclamation point ‣
// ReferenceError: shortGreeting is not defined
//     at Context.it (test/indexTest.js:55:14)
