// Third party NPM modules.
const _electron = require('electron');
const _express = require('express');

// Main controller.
const _controller = require('./lib/controller.js');

// The port express will use to serve views.
const _port = 3000;


/* --- Electron Injection Point --- */
const {app, BrowserWindow} = _electron;

app.on('ready', function() {

  let win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    useContentSize: true,
    resizable: false,
  });

  win.loadURL(`http://localhost:${_port}/`);
  win.focus();
  win.webContents.openDevTools();
});


/* --- Express Routes --- */
var e = _express();

e.use(_express.static(__dirname));
e.set('view engine', 'ejs');


e.listen(_port, function () {
  console.log(`Express is listening on port ${_port}.`)
})

e.get('/', function(req, res){
  res.render('encloud', {view: 'index'});
});

e.get('/files', function(req, res){
  res.render('encloud', {view: 'files', files: _controller.getFiles()});
});
