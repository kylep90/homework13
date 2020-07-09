// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {

  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function (err, res) {
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  },
  insertOne: function (tableInput, column, value, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [tableInput, column, value], function (err, res) {
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  },
  update: function(table, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += "devoured = true";
    // queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
}
}
// Export the orm object for the model (cat.js).
module.exports = orm;
