'use strict';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = require('browser-window');

app.on('ready', function () {

  var mainWindow = new BrowserWindow ({
    width: 800,
    height: 600,
    webPreferences: {
      webSecurity: false
    }
  });

  mainWindow.loadURL('https://roll20.net/');
  //mainWindow.webContents.openDevTools();
});
