import React from 'react';
import './App.css';
import {SelectSVG} from "@components/svgs";
import {Button} from 'antd'

function App() {
    return (
        <div className="App">
            <div className="App-container">
                <div className="Topbar">
                    <div className="AppLogo">
                        <div className="Appname">DiscoVault</div>
                    </div>
                </div>
                <div className='Sidebar'>
                    <div className="svg-button">
                        {SelectSVG('home')}
                    </div>
                    <div className="svg-button">
                        {SelectSVG('settings')}
                    </div>
                    <div className="help-button">
                        <div className="svg-button">
                            {SelectSVG('help')}
                        </div>
                    </div>
                </div>
                <div className="Modcard-container">
                    <div className="Modcard-body">
                        <div className="Modcard-header">
                            <div className="Mod-Icon">
                                {SelectSVG('betterdiscord')}
                            </div>
                            <div className="Mod-Title">
                                betterdiscord
                            </div>
                            <div className="Mod-Version">
                                v69.420
                            </div>
                            <input type="checkbox" className="Mod-Toggle"/>
                        </div>
                        <div className="Modcard-content">
                            Better Discord enhances Discord desktop app with new features.
                        </div>
                        <div className="Modcard-footer">

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
