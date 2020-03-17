// la_book table
const db = require('../../database/conn');
const sqlHelper = require('../../helpers/sqlHepler');
const version = '1.0.0';

exports.addIncomeListByBookId = (req, res,) => {
// 
db.beginTransaction(err => {
  if (err) {
    throw err;
  }
  let sql =
    'INSERT INTO la_list ' +
    '(lal_money, lal_type, lal_descript, lal_lab_id) ' +
    'VALUES (?, ? , ? , ? ) ';
  db.query(sql, [
    req.body.money,
    1,
    req.body.descript,
    req.body.id],
    (error, query) => {
      if (error) {
        return db.rollback(function () {
          throw error;
        });
      }
      sql =
        'UPDATE la_book ' +
        'SET lab_amount = lab_amount+?, lab_income = lab_income+? ' +
        'WHERE lab_id=? ';
      db.query(sql, [req.body.money, req.body.money, req.body.id], (error, query) => {
        if (error) {
          return db.rollback(function () {
            throw error;
          });
        }
        db.commit(err => {
          if (err) {
            return db.rollback(function () {
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
// 
};

exports.addExpenseListByBookId = (req, res) => {
  //
  db.beginTransaction(err => {
    if (err) {
      throw err;
    }
    let sql =
      'INSERT INTO la_list ' +
      '(lal_money, lal_type, lal_descript, lal_lab_id) ' +
      'VALUES (?, ? , ? , ? ) ';
    db.query(sql, [
      req.body.money,
      2,
      req.body.descript,
      req.body.id],
      (error, query) => {
        if (error) {
          return db.rollback(function () {
            throw error;
          });
        }
        sql =
          'UPDATE la_book ' +
          'SET lab_amount = lab_amount-?, lab_expense = lab_expense+? ' +
          'WHERE lab_id=? ';
        db.query(sql, [req.body.money, req.body.money, req.body.id], (error, query) => {
          if (error) {
            return db.rollback(function () {
              throw error;
            });
          }
          db.commit(err => {
            if (err) {
              return db.rollback(function () {
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
//
};
