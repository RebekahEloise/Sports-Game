# React Basics Sports Game

In this assessment, you will build a simple sports game. This will exercise your comfort level with JSX, stateful and stateless ReactJS components, working with props, and leveraging local state within a stateful component.

## Setup

- We have setup an HTML page that will present our application to our users (see index.html).
- We have also setup a default component for our App that `ReactDOM.render()` renders to our HTML page (see reactApp.js).
  - **App** is a common name used for this default component. Many components can make up our **App** but we render this default component component to display the entire application.
  - `ReactDOM.render()` should only ever render this component.
  - All other components will render through this component either referenced directly in this component or as children of components referenced directly in this component.
- Clone this repository and create a dev branch.
- To run a local web server, use the command-line to navigate into the directory containing this README and run `serve .` (Alternatively, you could use the [Live Server VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer))
  - [Why do we need a web server (stack overflow)](https://stackoverflow.com/questions/53042123/can-babel-standalone-be-used-if-index-html-is-served-locally-no-webserver)

## Requirements

### The Team Component

Usually, in a sports game, we want our favorite Team to win. In order to play this game, you are going to need to create teams so they can compete for the win. Below is an outline of the functionality our team component should include.

- Create a stateful **Team** component that accepts a **name** and a path to a team **logo** as props.
- This component should display the team name and the logo provided through props
- The Team component should also display some stats about the team, including:
  - The number of **Shots Taken**
  - The **Score** for the team
- The Team component should have a **Shoot** button. When the button is pressed:
  - The **Shots Taken** count should always increase
  - There should be a random chance that the **Score** count increases.
- Make sure to render and test your **Team** component functionality as you add new features.

### Setup Our Game

Now that we have a Default component that represents our Application and we have created our **Team** component, we can start assembling the game.

- Update the default App component you created to display 2 teams, the home team and the visiting team.
- Use your knowledge of HTML and CSS to make the page look more like a game where two teams, home and visiting, are facing off in competition
- Verify both teams are displayed and keeping track of their stats

### Add More Features

- Add functionality to make a sound play when a team shoots and a different sound when a team scores. The resources below should help accomplish this.
  - https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
  - https://www.freesoundeffects.com/free-sounds/sports-10098/
- Add an additonal statistic to our teams. Display a **Shot Percentage** metric. This should be shots attempted divided by shots scored.
  - This metric should only display if a shot has been taken. This should not be visible if the team has not attempted to make a shot.
- Create a **Game Component** that accepts a **venue** name as a prop.
- Update your default component that is currently displaying your teams to display the **Game** component instead. And move everything the default component was displaying into the **Game** component
- Update the **Game** component to display "Welcome to" followed by the name of the **venue** passed in as a prop.
- Your app should still render the default component with `ReactDOM.render()`, commonly named **App**.
  - The default **App** component should only render the **Game** component instead of rendering the **Team** components as before.
  - The Game component should display the venue name for the game and the **Team** components that were previously displayed in the default **App** component.
  - Each team should function as before but now conditionally display a **Shot Percentage** metric if a shot has been taken by the team.
- Think about what would happen if we added another **Game** component to our App. We could change the **Venue** name but we can only create new games with the same teams. What could we modify in the **Game** and **Team** components to allow us to have unique teams for each game we include in our default App component?

## Example Output

![](http://g.recordit.co/CBV5fVTm7c.gif)

## Stretch Goals (optional)

This section is not required and is to challenge you on concepts related to state. Let's modify the **Game** component to be the source of truth for the game's state. The **Game** component should keep track of each team's current stats. Currently, most of this is tracked in our **Team** component. Our game component will manage 2 teams, home and visiting, and their stats during the game. To accomplish this we will be converting our **Team** component to a stateless functional component and having the stateful **Game** component pass the data to the teams as props. This is concept is called [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html). We are sharing state with all the components concerned by moving it up to the closest common ancestor of the components that rely on it.

- Convert the **Team** component to a functional stateless component.
  - Everything that relied on state before inside the **Team** component should now rely on passed in props from the **Game** component.
- Update the **Game** component to keep track of the home and visiting team stats and pass that data to the **Team** component as props.
- Since all the game data will be tracked by the **Game** components state, the method used when clicking the shoot button for a team should also be passed in as a prop. This method needs to affect state in the right component.
- Add a **Reset Game** button to the **Game** and a counter displaying the number of resets.
  - When the reset button is pressed the team stats should reset and the reset counter should increase by 1
- Create a Scoreboard component that displays the HOME and VISITING team scores.

# Credits and References

Author: Rebekah Eloise Miller

References: Mia (facilitator), React Documentation,Tianna (coach),
