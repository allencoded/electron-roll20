'use strict';
const electron = require('electron');
const app = electron.app;
const BrowserWindow = require('browser-window');
const storage = require('./libs/storage');

const Menu = require('menu');
const customMenu = require('./libs/custom-menu');

app.on('ready', () => {
  // grab last main window state
  let lastMainWindowState = storage.get('lastMainWindowState');
  if (lastMainWindowState === null) {
    lastMainWindowState = {
      width: 800,
      height: 600,
      maximized: false,
    };
  }

  const mainWindow = new BrowserWindow({
    x: lastMainWindowState.x,
    y: lastMainWindowState.y,
    width: lastMainWindowState.width,
    height: lastMainWindowState.height,
    webPreferences: {
      webSecurity: false,
    },
  });

  mainWindow.loadURL('https://roll20.net/');
  // mainWindow.webContents.openDevTools();

  mainWindow.on('close', () => {
    const bounds = mainWindow.getBounds();
    storage.set('lastMainWindowState', {
      x: bounds.x,
      y: bounds.y,
      width: bounds.width,
      height: bounds.height,
      maximized: mainWindow.isMaximized(),
    });
  });

  const template = customMenu.getTemplate();
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
});
