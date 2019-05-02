
var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
insertOne: function(newinput, cb) {
  var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
    connection.query(queryString, [newinput], function(err, result) {
      if (err) {
        return res.status(500).end();
      }
  //res.json(req.body);
//console.log(req.body);
cb(result);

    });
  },
 
updateOne: function (devour, cb) {
  var queryString = "UPDATE burgers SET devoured = 1 where id = ? ";
  connection.query(queryString, [devour], function (err,result) {
     
    if (err) {
      return res.status(500).end();
    }
cb(result);
  });
}
}
  module.exports = orm;




  

