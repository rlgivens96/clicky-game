import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import logo from './logo.svg';
import './App.css';

class App extends Component {

	// Set our state variables
	state = {
		guessArray: [],
		message: "Click image to begin!",
		score: 0,
		topScore: 0,
		shake: 0
  };
  