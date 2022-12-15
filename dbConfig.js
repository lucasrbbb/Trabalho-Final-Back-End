const { query } = require("express");
const mysql = require("mysql");

const banco = mysql.createConnection({
  host: "localhost",
  port: 3305,
  user: "root",
  password: "root",
  database: "storeDB",
});

function createDataBase(name) {
  banco.query(`CREATE DATABASE ${name}`, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
}

function dropDataBase(name) {
  banco.query(`DROP DATABASE ${name}`, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
}

//createDataBase("StoreDB");

function createTableUnits() {
  const query =
    "CREATE TABLE tb_units (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, description VARCHAR(50) NOT NULL);";
  banco.query(query, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
}

function createTableItems() {
  const query =
    "CREATE TABLE tb_items (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, description VARCHAR(50) NOT NULL, unit_id INT NOT NULL, cost DOUBLE NOT NULL, quantity INT NOT NULL FOREIGN KEY (unit_id) REFERENCES tb_units(id));";
  banco.query(query, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
}

function dropTable(name) {
  query = `DROP TABLE ${name}`;
  banco.query(query, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
}

function insertTableCadastro(name, idade) {
  const query = `INSERT INTO cadastro (name, idade) VALUES ('${name}', ${idade})`;
  banco.query(query, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
}

function insertTableUnits(unit) {
  const query = `INSERT INTO tb_units (description) VALUES (${unit})`;
  banco.query(query, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
}

module.exports = banco;
