// la_book table
const db = require('../database/conn');

exports.getAllBookV1 = (req, res, next) => {
  let sql = 'SELECT * FROM la_book';
  db.query(sql, (err, query) => {
    if (err) {
      console.log(sql + 'error : ');
      console.log(err);
      res.json(err);
    } else {
      console.log(sql + 'success : ');
      console.log(query);
      res.status(200).json({
        code: 1,
        version: '1',
        message: 'ok',
        data: query
      });
    }
  });
};

exports.getAtBookV1 = (req, res, next) => {
  let sql = 'SELECT * FROM la_book WHERE lab_id = ?';
  db.query(sql, [req.params.id], (err, query) => {
    if (err) {
      console.log(sql + 'error : ');
      console.log(err);
      res.json(err);
    } else {
      console.log(sql + 'success : ');
      console.log(query);
      res.status(200).json({
        code: 1,
        version: '1',
        message: 'ok',
        data: query
      });
    }
  });
};

exports.addBookV1 = (req, res, next) => {
  let sql =
    'INSERT INTO la_book ' +
    '(lab_token, lab_amount, lab_income, lab_expense, lab_descript , lab_lap_id )' +
    'VALUES (?, ?, ?, ? , ? , ?)';
  db.query(
    sql,
    [
      req.body.token,
      req.body.amount,
      req.body.income,
      req.body.expense,
      req.body.descript,
      req.body.id
    ],
    (err, query) => {
      if (err) {
        console.log(sql + 'error : ');
        console.log(err);
        res.json(err);
      } else {
        console.log(sql + 'success : ');
        console.log(query);
        res.status(200).json({
          code: 1,
          version: '1',
          message: 'ok',
          data: query
        });
      }
    }
  );
};

exports.updateBookV1 = (req, res, next) => {
  let sql =
    'UPDATE la_book ' +
    'SET lab_token = ? ,' +
    'lab_amount = ? ,' +
    'lab_income = ? ,' +
    'lab_expense = ? ,' +
    'lab_descript = ? ,' +
    'lab_lap_id = ? ' +
    'WHERE lab_id = ?';
  db.query(
    sql,
    [
      req.body.token,
      req.body.amount,
      req.body.income,
      req.body.expense,
      req.body.descript,
      req.body.id,
      req.params.id
    ],
    (err, query) => {
      if (err) {
        console.log(sql + 'error : ');
        console.log(err);
        res.json(err);
      } else {
        console.log(sql + 'success : ');
        console.log(query);
        res.status(200).json({
          code: 1,
          version: '1',
          message: 'ok',
          data: query
        });
      }
    }
  );
};

exports.deleteAtBookV1 = (req, res, next) => {
  let sql = 'DELETE FROM la_book WHERE lab_id = ?';
  db.query(sql, [req.params.id], (err, query) => {
    if (err) {
      console.log(sql + 'error : ');
      console.log(err);
      res.json(err);
    } else {
      console.log(sql + 'success : ');
      console.log(query);
      res.status(200).json({
        code: 1,
        version: '1',
        message: 'ok',
        data: query
      });
    }
  });
};
