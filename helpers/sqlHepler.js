exports.builder = (code, version, db, res, sql, params = null) => {
  db.query(sql, params, (err, query) => {
    if (err) {
      console.log(sql + 'error : ');
      console.log(err);
      res.json(err);
    } else {
      console.log(sql + 'success : ');
      console.log(query);
      res.status(code).json({
        code: code,
        version: version,
        message: 'Success response',
        data: query
      });
    }
  });
};