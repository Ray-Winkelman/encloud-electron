'use strict';

const sqlite3 = require('sqlite3').verbose();

module.exports = {
  dbTest: function ()
  {
    var db = new sqlite3.Database('./db/database.sqlite');

    db.serialize(function() {
      //db.run("CREATE TABLE lorem (info TEXT)");

      var stmt = db.prepare("INSERT INTO Files (filename, size) VALUES (?,?)");

      //for (var i = 0; i < 10; i++) {
          stmt.run("Name", 300);
      //}
      stmt.finalize();

      db.each("SELECT filename FROM Files", function(err, row) {
          console.log(row.filename);
      });
    });

    db.close();
  },
  haha: function () {
    return 'haha';
  }
};
