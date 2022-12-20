const banco = require("../dbConfig");

function getData(req, res) {
  const query = `SELECT * FROM tb_units`;
  banco.query(query, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
}

module.exports = { getData };
