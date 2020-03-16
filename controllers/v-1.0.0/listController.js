// la_book table
const db = require('../../database/conn');
const sqlHelper = require('../../helpers/sqlHepler');
const version = '1.0.0';

exports.addIncomeListByBookId = (req, res,updateIncomeListByBookId) => {
  let sql =
    'INSERT INTO la_list ' +
    '(lal_money, lal_type, lal_descript, lal_lab_id) ' +
    'VALUES (?, ? , ? , ? ) ';
  sqlHelper.builder(201, version, db, res, sql, [
    req.body.money,
    1,
    req.body.descript,
    req.body.id
  ]);
  updateIncomeListByBookId
};

updateIncomeListByBookId = (req, res) => {
  let sql =
    'UPDATE la_book ' +
    'SET lab_amount = lab_amount+?, lab_income = lab_income+? ' +
    'WHERE lab_id=? '
  sqlHelper.builder(201, version, db, res, sql, [
    req.body.money,
    req.body.money,
    req.body.id
  ]);
};

exports.addExpenseListByBookId = (req, res) => {
  let sql =
    'INSERT INTO la_list ' +
    '(lal_money, lal_type, lal_descript, lal_lab_id) ' +
    'VALUES (?, ? , ? , ? ) ';
  sqlHelper.builder(201, version, db, res, sql, [
    req.body.money,
    2,
    req.body.descript,
    req.body.id
  ]);
};
