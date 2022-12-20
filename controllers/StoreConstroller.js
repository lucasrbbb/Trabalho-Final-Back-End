const banco = require("../dbConfig");

function postData(req, res) {
  const query = `INSERT into tb_items (description, unit_id, cost, quantity) VALUES 
    ('${req.body.description}', ${req.body.unit_id}, ${req.body.cost}, ${req.body.quantity});`;
  banco.query(query, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
}

function listData(req, res) {
  const query = `SELECT * FROM tb_items;`;
  banco.query(query, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
}

function updateItem(req, res) {
  const query = `UPDATE tb_items 
    SET description = '${req.body.description}',
    unit_id = ${req.body.unit_id}, 
    cost = ${req.body.cost}, 
    quantity = ${req.body.quantity}
    WHERE id = ${req.body.id};`;
  banco.query(query, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
}

function deleteItem(req, res) {
  const query = `DELETE FROM tb_items 
  WHERE id = ${req.params.id};`;
  banco.query(query, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
}

module.exports = { postData, listData, updateItem, deleteItem };
