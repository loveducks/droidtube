import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
import Video from './Video';

const API_KEY = 'AIzaSyBtXZ5J6xGnQAmInY5BJB3GCylP4xjBv80';
const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

class App extends Component {


    render() {
        return (
        <div className="App">
            <Video 
                API_KEY={API_KEY}
                SEARCH_URL={SEARCH_URL}
            />
        </div>
        );
    }
}

export default App;
