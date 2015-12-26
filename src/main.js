'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;
var ppapi_flash_path = null;

app.on('window-all-closed', function () {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.commandLine.appendSwitch('ppapi-flash-path', __dirname + '/PepperFlash/PepperFlashPlayer.plugin');
app.commandLine.appendSwitch('ppapi-flash-version', '19.0.0.245');

app.on('ready', function () {
  mainWindow = new BrowserWindow({
    width: 960,
    height: 980,
    'web-preferences': {
      'plugins': true
    }
  });
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});
