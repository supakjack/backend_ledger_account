// la_person table
const db = require('../database/conn');

exports.getAllPersonV1 = (req, res, next) => {
  let sql = 'SELECT * FROM la_person';
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

exports.getAtPersonV1 = (req, res, next) => {
  let sql = 'SELECT * FROM la_person WHERE lap_id = ?';
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

exports.addPersonV1 = (req, res, next) => {
  let sql =
    'INSERT INTO la_person ' +
    '(lap_fname, lap_lname, lap_nname, lap_pfname_id)' +
    'VALUES (?, ?, ?, ?)';
  db.query(
    sql,
    [req.body.fname, req.body.lname, req.body.nname, req.body.pfname_id],
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

exports.updatePersonV1 = (req, res, next) => {
  let sql =
    'UPDATE la_person ' +
    'SET lap_fname = ? ,' +
    'lap_lname = ? ,' +
    'lap_nname = ? ,' +
    'lap_pfname_id = ? ' +
    'WHERE lap_id = ?';
  db.query(
    sql,
    [
      req.body.fname,
      req.body.lname,
      req.body.nname,
      req.body.pfname_id,
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

exports.deleteAtPersonV1 = (req, res, next) => {
  let sql = 'DELETE FROM la_person WHERE lap_id = ?';
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
