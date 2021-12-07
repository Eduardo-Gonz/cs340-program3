var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_gonzedua',
  password        : 'Santos10',
  database        : 'cs340_gonzedua'
});
module.exports.pool = pool;
