const db = require('../../database/conn');
const sqlHelper = require('../../helpers/sqlHepler');
const version = '1.0.0';

exports.checkAuthenByFacebookId = (req, res) => {
  let sql =
    'SELECT COUNT(laa_fb_id) > 0 AS authen ' +
    'FROM la_authen ' +
    'WHERE laa_fb_id = ? ';
  sqlHelper.builder(200, version, db, res, sql, [req.params.id]);
};

exports.getFullStateUserByAuthenId = (req, res) => {
  let sql =
    'SELECT laa.laa_id AS authenId , laa.laa_fb_id AS facebookId , lap.lap_id AS personId ' +
    'FROM la_authen AS laa ' +
    'LEFT JOIN la_person AS lap ' +
    'ON laa.laa_lap_id = lap.lap_id ' +
    'WHERE laa.laa_fb_id = ? ';
  sqlHelper.builder(200, version, db, res, sql, [req.params.id]);
};

exports.addAuthenByFacebookId = (req, res) => {
  db.beginTransaction(err => {
    if (err) {
      throw err;
    }
    let sql = 'INSERT INTO la_person (lap_fname) VALUES (?) ';
    db.query(sql, [req.body.name], (error, query) => {
      if (error) {
        return db.rollback(function() {
          throw error;
        });
      }
      let sql =
        'INSERT INTO la_authen (laa_fb_id,laa_lap_id) VALUES (  ? , ?  ) ';
      db.query(sql, [req.body.id, query.insertId], (error, query) => {
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
          res.status(201).json({
            code: 201,
            version: version,
            message: 'Success response',
            data: query
          });
        }); // end commit
      }); // end insert authen
    }); // end insert person
  }); // end beginTransaction
};

exports.deleteAuthenByAuthenId = (req, res) => {
  db.beginTransaction(err => {
    if (err) {
      throw err;
    }
    let sql =
      'DELETE FROM la_list ' +
      'WHERE la_list.lal_lab_id ' +
      'IN (SELECT la_book.lab_id ' +
      'FROM la_book ' +
      'WHERE la_book.lab_lap_id ' +
      'IN (SELECT la_authen.laa_lap_id ' +
      'FROM la_authen ' +
      'WHERE la_authen.laa_id = ?) ) ';
    db.query(sql, [req.params.id], (error, query) => {
      if (error) {
        return db.rollback(function() {
          throw error;
        });
      }
      sql =
        'DELETE FROM la_book ' +
        'WHERE la_book.lab_lap_id ' +
        'IN (SELECT la_authen.laa_lap_id ' +
        'FROM la_authen ' +
        'WHERE la_authen.laa_id = ?) ';
      db.query(sql, [req.params.id], (error, query) => {
        if (error) {
          return db.rollback(function() {
            throw error;
          });
        }
        sql =
          'DELETE FROM la_person ' +
          'WHERE la_person.lap_id ' +
          'IN (SELECT la_authen.laa_lap_id ' +
          'FROM la_authen ' +
          'WHERE la_authen.laa_id = ?) ';
        db.query(sql, [req.params.id], (error, query) => {
          if (error) {
            return db.rollback(function() {
              throw error;
            });
          }
          sql = 'DELETE FROM la_authen ' + 'WHERE la_authen.laa_id = ? ';
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
          });
        });
      }); // end insert authen
    }); // end insert person
  }); // end beginTransaction
};
