import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A brief bio about John Doe.',
        profession: 'Software Developer',
      },
      show: false,
      timeInterval: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, timeInterval } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time Interval: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
