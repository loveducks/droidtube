import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
import Video from './Video';

const API_KEY = 'AIzaSyDt15F1He8H3V868vtc1ynbD0Yqzzr7AtM';
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
