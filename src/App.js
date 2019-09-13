import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import friends from "./friends.json";
import './App.css';

class App extends Component {

  state = {
    guessArray: [],
    message: "Click image to begin!",
    score: 0,
    topScore: 0,
  };
  clickCard = card => {
    let guessArray = this.state.guessArray;
    let score = this.state.score;
    // If we already clicked this card...
    if (guessArray[card.id]) {
      this.setState({
        message: "Game Over!",
        topScore: Math.max(this.state.score, this.state.topScore),
        guessArray: [],
        score: 0,
      })
    }
    else {
      guessArray[card.id] = true;
      this.setState({
        message: "Good Job!",
        guessArray: guessArray,
        score: ++score,
      }, () => {
        if (this.state.score === 12) {
          this.setState({
            message: "You Won!",
            topScore: Math.max(this.state.score, this.state.topScore),
            guessArray: [],
            score: 0,
          })
        }
      })
    }
  }
  render() {
    return (
      <div>
        <Nav message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore} />
        {/* Use "reshake" to shake the page on a wrong answer */}
        <Jumbotron />
        <Card>
          {friends
            .sort((a, b) => 0.5 - Math.random())
            .map(randomCard => (
              <Card
                clickCard={this.clickCard}
                id={randomCard.id}
                key={randomCard.id}
                image={randomCard.image} />))}
        </Card>
        <Footer />
      </div>
    );
  }
}

export default App;
