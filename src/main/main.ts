import { app, BrowserWindow, screen } from 'electron';
import * as path from 'path';
import * as url from 'url';

let mainWindow: BrowserWindow | null = null;
let splashWindow: BrowserWindow | null = null;

function createSplashWindow() {
    splashWindow = new BrowserWindow({
        width: 500,
        height: 300,
        frame: false,
        transparent: true,
        show: false,
        center: true,
        alwaysOnTop: true,
        skipTaskbar: true,
        roundedCorners: true, // this doesnt work on windows. thanks
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    splashWindow.loadURL(url.format({
        pathname: path.join(__dirname, '../renderer/splash.html'),
        protocol: 'file:',
        slashes: true
    }));

    splashWindow.once('ready-to-show', () => {
        splashWindow?.show();
    });
}

function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        autoHideMenuBar: true,
        show: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '../renderer/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.once('ready-to-show', () => {
        setTimeout(() => {
            if (splashWindow) {
                splashWindow.close();
                splashWindow = null;
            }
            mainWindow?.show();
            mainWindow?.focus();
        }, 2000);
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', () => {
    createSplashWindow();
    createMainWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createMainWindow();
    }
});