// Third party NPM modules.
const electron = require('electron');
const express = require('express');

// Main controller.
const controller = require('./lib/controller.js');

// The port express will use to serve views.
const port = 3000;


/* --- Electron Injection Point --- */
const {app, BrowserWindow} = electron;

app.on('ready', function() {

  let win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    useContentSize: true,
    resizable: false,
  });

  win.loadURL(`http://localhost:${port}/`);
  win.focus();

});


/* --- Express Routes --- */
var e = express();

e.use(express.static(__dirname));
e.set('view engine', 'ejs');


e.listen(port, function () {

  controller.dbTest();
  console.log(`Express is listening on port ${port}.`)
})

e.get('/', function(req, res){
  res.render('encloud', {view: 'index'});
});
