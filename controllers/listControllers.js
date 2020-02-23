// la_list table
const db = require('../database/conn');

exports.getAllListV1 = (req, res, next) => {
  let sql = 'SELECT * FROM la_list';
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

exports.getAtListV1 = (req, res, next) => {
  let sql = 'SELECT * FROM la_list WHERE lal_id = ?';
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

exports.addListV1 = (req, res, next) => {
  let sql =
    'INSERT INTO la_list ' +
    '(lal_type, lal_money, lal_descript, lal_lab_id)' +
    'VALUES (?, ?, ?, ?)';
  db.query(
    sql,
    [req.body.type, req.body.money, req.body.descript, req.body.id],
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

exports.updateListV1 = (req, res, next) => {
  let sql =
    'UPDATE la_list ' +
    'SET lal_type = ? ,' +
    'lal_money = ? ,' +
    'lal_descript = ? ,' +
    'lal_lab_id = ? ' +
    'WHERE lal_id = ?';
  db.query(
    sql,
    [
      req.body.type,
      req.body.money,
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

exports.deleteAtListV1 = (req, res, next) => {
  let sql = 'DELETE FROM la_list WHERE lal_id = ?';
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
