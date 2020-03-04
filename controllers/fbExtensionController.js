// la_extension table
const db = require('../database/conn_login_facbook');

exports.getAllfbExtensionV1 = (req, res, next) => {
  let sql = 'SELECT * FROM fb_extension';
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

exports.getAtfbExtensionV1 = (req, res, next) => {
  let sql = 'SELECT * FROM fb_extension WHERE fbe_id = ?';
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

exports.addfbExtensionV1  = (req, res, next) => {
  let sql = 'INSERT INTO fb_extension ' + 'VALUES (?)';
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

exports.updatefbExtensionV1= (req, res, next) => {
  let sql =
    'UPDATE fb_extension  '  + 'WHERE fbe_id = ?';
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

exports.deleteAtfbExtensionV1= (req, res, next) => {
  let sql = 'DELETE FROM fb_extension WHERE fbe_id = ?';
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
