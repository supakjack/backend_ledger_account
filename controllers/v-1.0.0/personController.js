const db = require('../../database/conn');
const sqlHelper = require('../../helpers/sqlHepler');
const version = '1.0.0';

exports.activeAllBookByPersonId = (req, res) => {
  let sql =
    'UPDATE la_person ' +
    'SET lap_active_all_book = ? ' +
    'WHERE la_person.lap_id = ? ';
  sqlHelper.builder(200, version, db, res, sql, [1, req.params.id]);
};

exports.deactiveAllBookByPersonId = (req, res) => {
  let sql =
    'UPDATE la_person ' +
    'SET lap_active_all_book = ? ' +
    'WHERE la_person.lap_id = ? ';
  sqlHelper.builder(200, version, db, res, sql, [0, req.params.id]);
};
