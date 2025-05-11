import React from 'react';
import './App.css';
import {SelectSVG} from "@components/svgs";

function App() {
    return (
        <div className="App">
            <div className='Sidebar'>
                {SelectSVG('home')}
                {SelectSVG('settings')}
                {SelectSVG('help')}
            </div>
        </div>
    );
}

export default App;
