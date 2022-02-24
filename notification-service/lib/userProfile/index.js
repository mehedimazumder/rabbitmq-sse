'use strict';

module.exports = (db, cache) => {
  return require('./user-controller')(
    require('./user-service')(db, cache)
  );
};