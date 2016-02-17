'use strict';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = require('browser-window');
var storage = require("./libs/storage");

app.on('ready', function () {

  // grab last main window state
  var lastMainWindowState = storage.get("lastMainWindowState");
  if (lastMainWindowState === null) {
    lastMainWindowState = {
      width: 800,
      height: 600,
      maximized: false
    };
  }

  var mainWindow = new BrowserWindow ({
    x: lastMainWindowState.x,
    y: lastMainWindowState.y,
    width: lastMainWindowState.width,
    height: lastMainWindowState.height,
    webPreferences: {
      webSecurity: false
    }
  });
  
  mainWindow.loadURL('https://roll20.net/');
  //mainWindow.webContents.openDevTools();

  mainWindow.on('close', function() {
    var bounds = mainWindow.getBounds();
    storage.set("lastMainWindowState", {
      x: bounds.x,
      y: bounds.y,
      width: bounds.width,
      height: bounds.height,
      maximized: mainWindow.isMaximized()
    });
  });

});
