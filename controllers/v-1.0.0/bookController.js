const db = require('../../database/conn');
const sqlHelper = require('../../helpers/sqlHepler');
const version = '1.0.0';

exports.getBookByAuthenId = (req, res) => {
  let sql =
    'SELECT * ' + 
    'FROM la_list ' + 
    'LEFT JOIN la_book '+
    'ON la_list.lal_lab_id = la_book.lab_id '+
    'LEFT JOIN la_person '+
    'ON la_book.lab_lap_id = la_person.lap_id  '+
    'LEFT JOIN la_authen '+
    'ON la_person.lap_id = la_authen.laa_lap_id '+
    'WHERE la_authen.laa_id = ?';


  sqlHelper.builder(200, version, db, res, sql, [req.params.id]);
};

exports.getAmountByBookId = (req, res) => {
  let sql =
    'SELECT lab_amount AS amount ' + 'FROM la_book ' + 'WHERE lab_id = ?';
  sqlHelper.builder(200, version, db, res, sql, [req.params.id]);
};

exports.getIncomeByBookId = (req, res) => {
  let sql =
    'SELECT lab_income AS income ' + 'FROM la_book ' + 'WHERE lab_id = ? ';
  sqlHelper.builder(200, version, db, res, sql, [req.params.id]);
};

exports.getExpenseByBookId = (req, res) => {
  let sql =
    'SELECT lab_expense AS expense ' + 'FROM la_book ' + 'WHERE lab_id = ? ';
  sqlHelper.builder(200, version, db, res, sql, [req.params.id]);
};

exports.getCurrencyByBookId = (req, res) => {
  let sql =
    'SELECT lab_currency AS currency ' + 'FROM la_book ' + 'WHERE lab_id = ? ';
  sqlHelper.builder(200, version, db, res, sql, [req.params.id]);
};

exports.getBookNameByBookId = (req, res) => {
  let sql = 'SELECT lab_name AS name ' + 'FROM la_book ' + 'WHERE lab_id = ? ';
  sqlHelper.builder(200, version, db, res, sql, [req.params.id]);
};

exports.getIncomeByBookIdNowDate = (req, res) => {
  let sql =
    'SELECT IF( COUNT(lab_income) = 0 , 0 , lab_income) AS income ' +
    'FROM la_book ' +
    
    "WHERE lab_timestamp LIKE CONCAT(CURDATE(),'%') " +
    'AND lab_id = ? ';
  sqlHelper.builder(200, version, db, res, sql, [req.params.id]);
};

exports.getExpenseByBookIdNowDate = (req, res) => {
  let sql =
    'SELECT IF( COUNT(lab_expense) = 0 , 0 , lab_expense) AS expense ' +
    'FROM la_book ' +
    "WHERE lab_timestamp LIKE CONCAT(CURDATE(),'%') " +
    'AND lab_id = ? ';
  sqlHelper.builder(200, version, db, res, sql, [req.params.id]);
};

exports.addBook = (req, res) => {
  let sql =
    'INSERT INTO la_book ' +
    '(lab_name, lab_amount, lab_currency , lab_lap_id) ' +
    'VALUES (?, ? , ? ,? ) ';
  sqlHelper.builder(201, version, db, res, sql, [
    req.body.name,
    req.body.amount,
    req.body.currency,
    req.body.id
  ]);
};

exports.updateNameByBookId = (req, res) => {
  let sql =
    'UPDATE la_book  ' + 'SET lab_name = ? ' + 'WHERE la_book.lab_id = ?  ';
  sqlHelper.builder(201, version, db, res, sql, [req.body.name, req.params.id]);
};

exports.deleteBookByBookId = (req, res) => {
  db.beginTransaction(err => {
    if (err) {
      throw err;
    }
    let sql = 'DELETE FROM la_list ' + ' WHERE lal_lab_id = ? ';
    db.query(sql, [req.params.id], (error, query) => {
      if (error) {
        return db.rollback(function() {
          throw error;
        });
      }
      let sql = 'DELETE FROM la_book ' + ' WHERE lab_id = ? ';
      db.query(sql, [req.params.id], (error, query) => {
        if (error) {
          return db.rollback(function() {
            throw error;
          });
        }
        db.commit(err => {
          if (err) {
            return db.rollback(function() {
              throw err;
            });
          }
          console.log('success!');
          res.status(200).json({
            code: 200,
            version: version,
            message: 'Success response',
            data: query
          });
        }); // end commit
      }); // end delete book
    }); // end delete list
  }); // end beginTransaction
};


