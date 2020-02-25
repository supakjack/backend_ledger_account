// la_mediator table
const db = require('../database/conn');

exports.getAllMediatorV1 = (req, res, next) => {
  let sql = 'SELECT * FROM la_mediator';
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

exports.getAtMediatorV1 = (req, res, next) => {
  let sql = 'SELECT * FROM la_mediator WHERE lam_id = ?';
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

exports.addMediatorV1 = (req, res, next) => {
  let sql =
    'INSERT INTO la_mediator ' +
    '(lam_use,lam_descript,lam_lab_id,lam_lae_id)' +
    'VALUES (?,?,?,?)';
  db.query(
    sql,
    [req.body.use, req.body.descript, req.body.book_id, req.body.extension_id],
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

exports.updateMediatorV1 = (req, res, next) => {
  let sql =
    'UPDATE la_mediator ' +
    'SET lam_use = ? ,' +
    'lam_descript = ? ,' +
    'lam_lab_id = ? ,' +
    'lam_lae_id = ? ' +
    'WHERE lam_id = ?';
  db.query(
    sql,
    [
      req.body.use,
      req.body.descript,
      req.body.book_id,
      req.body.extension_id,
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

exports.deleteAtMediatorV1 = (req, res, next) => {
  let sql = 'DELETE FROM la_mediator WHERE lam_id = ?';
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
