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

// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.commandLine.appendSwitch('ppapi-flash-path', __dirname + '/PepperFlash/PepperFlashPlayer.plugin');

// Specify flash version, for example, v18.0.0.203
app.commandLine.appendSwitch('ppapi-flash-version', '19.0.0.245');

// Electronの初期化完了後に実行
app.on('ready', function () {
  mainWindow = new BrowserWindow({
    width: 960,
    height: 580,
    'web-preferences': {
      'plugins': true
    }
  });
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // ウィンドウが閉じられたらアプリも終了
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});