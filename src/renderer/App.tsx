import React from 'react';
import './App.css';
import {SelectSVG} from "@components/svgs";
import Button from "@components/Button";

function App() {
  return (
    <div className="App">
      <div className='Sidebar'>
        <Button className={'svg-button'} onClick={() => {console.log('hi')}}>
            {SelectSVG('home')}
        </Button>
          <Button className={'svg-button'} onClick={() => {console.log('hi')}}>
              {SelectSVG('settings')}
          </Button>
          <Button className={'svg-button'} onClick={() => {console.log('hi')}}>
              {SelectSVG('help')}
          </Button>
      </div>
    </div>
  );
}

export default App;
