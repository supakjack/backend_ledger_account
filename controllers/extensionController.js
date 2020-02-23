// la_extension table
const db = require('../database/conn');

exports.getAllExtensionV1 = (req, res, next) => {
  let sql = 'SELECT * FROM la_extension';
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

exports.getAtExtensionV1 = (req, res, next) => {
  let sql = 'SELECT * FROM la_extension WHERE lae_id = ?';
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

exports.addExtensionV1 = (req, res, next) => {
  let sql = 'INSERT INTO la_extension ' + '(lae_descript)' + 'VALUES (?)';
  db.query(sql, [req.body.descript], (err, query) => {
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

exports.updateExtensionV1 = (req, res, next) => {
  let sql =
    'UPDATE la_extension ' + 'SET lae_descript = ? ' + 'WHERE lae_id = ?';
  db.query(sql, [req.body.descript, req.params.id], (err, query) => {
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

exports.deleteAtExtensionV1 = (req, res, next) => {
  let sql = 'DELETE FROM la_extension WHERE lae_id = ?';
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
