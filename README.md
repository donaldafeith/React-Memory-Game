## Memory Game in React

This is a simple memory game built using React. The objective of the game is to match all pairs of cards before the time runs out.

### How to Play

1.  Clone the repository
2.  Install dependencies with `npm install`
3.  Start the game with `npm start`
4.  Click on a card to flip it over
5.  Click on another card to see if it is a match
6.  If the cards match, they will stay flipped over. If not, they will flip back over after 1 second.
7.  Continue flipping over cards until all pairs are matched.

### Features

-   The game is timed and will end after 2 minutes
-   A score is kept and displayed at the end of the game
-   The game can be reset with the "Restart" button

### Implementation Details

The game was implemented using React hooks to manage state. The `useState` hook was used to manage the state of the cards, whether they were flipped over or not, the state of the first and second cards clicked, and the number of matches. The `useEffect` hook was used to check if a match had been made and to reset the game when it ended.

### Technologies Used

-   React
-   JavaScript
-   HTML
-   CSS
