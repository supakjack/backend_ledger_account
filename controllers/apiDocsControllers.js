exports.getApiDocsLatest = (req, res, next) => {
  res
    .status(301)
    .redirect(
      'https://documenter.getpostman.com/view/6560868/SzKVQdfp?version=latest'
    );
};
