const electron = require('electron');
const express = require('express');


/* --- Electron Injection Point --- */
const {app, BrowserWindow} = electron;

app.on('ready', function() {

  let win = new BrowserWindow({
    width: 800,
    height: 400,
    autoHideMenuBar: true,
    useContentSize: true,
    resizable: false,
  });

  win.loadURL('http://localhost:3000/');
  win.focus();

});


/* --- Express Routes --- */
var e = express();

e.set('view engine', 'ejs');

e.listen(3000, function () {
  console.log('Express is listening on port 3000.')
})

e.get('/', function(req, res){
  res.render('encloud', {view: 'partials/test'});
});
