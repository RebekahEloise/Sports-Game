// Default App component that all other compents are rendered through
function App(props) {
  return (
    <div>
      <Game venue="The Miller Arena" />
    </div>
  );
}

//create Game component
class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { venue } = this.props;

    return (
      <div className="Game">
        <h1>Welcome to {venue}</h1>
        <Team name="Sooners" logo="wagon.png" />
        <Team name="Longhorns" logo="longhorn.png" />
      </div>
    );
  }
}

//create Team component
class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      shotsTaken: 0,
    };
  }

  shoot = () => {
    // this.state.shotsTaken += 1;
    this.setState((state) => ({ shotsTaken: (state.shotsTaken += 1) }));
    let shotAudio = new Audio("FOOTBALLKICK.mp3");
    shotAudio.play();

    let randomness = Math.floor(Math.random() * 2);
    if (randomness === 1) {
      //this.state.score += 1;
      this.setState((state) => ({ score: (state.score += 1) }));
      let scoreAudio = new Audio("hitcrowdcheer.mp3");
      scoreAudio.play();
    }
    // let percentage = this.shotsTaken / this.score;
    // return percentage;
    this.setState((state) => ({ percentage: state.shotsTaken / state.score }));
  };

  render() {
    const { name, logo } = this.props;
    const { score, shotsTaken, percentage } = this.state;
    return (
      <div className="Team">
        <h1>Team Name:{name}</h1>
        <img src={logo} />
        <p>Score:{score}</p>
        <p>Shots Taken:{shotsTaken}</p>
        <p>Shot Percentage:{percentage}</p>
        <button onClick={this.shoot}>Shoot</button>
      </div>
    );
  }
}

//Render the application
ReactDOM.render(<App />, document.getElementById("root"));
