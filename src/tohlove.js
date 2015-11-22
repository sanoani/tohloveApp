'use strict';
var remote = require('remote');
var app = remote.require('app');

var webview = document.getElementById('mainWebView');
var title = '';

// check title every second
setInterval(function () {
  title = webview.getTitle();
}, 1000);