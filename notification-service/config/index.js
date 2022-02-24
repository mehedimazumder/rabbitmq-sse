'use strict';

require('dotenv').config();

let env = process.env.NODE_ENV || 'development',
  cfg = require('./config.' + env);

cfg['db'] = require('./config.database')[env];

module.exports = cfg;