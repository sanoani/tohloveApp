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

// Electronの初期化完了後に実行
app.on('ready', function () {
  mainWindow = new BrowserWindow({
    width: 960,
    height: 580,
    'web-preferences': {
      'plugins': true
    }
  });
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  // ウィンドウが閉じられたらアプリも終了
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});