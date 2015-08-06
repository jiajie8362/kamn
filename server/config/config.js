'use strict';

/**
 * Environment variables and application configuration.
 */

var path = require('path'),
    _ = require('lodash');

var baseConfig = {
  app: {
    root: path.normalize(__dirname + '/../..'),
    env: process.env.NODE_ENV,
    secret: process.env.SECRET || 'secret key' /* used in signing the jwt tokens */,
    pass: process.env.PASS || 'pass' /* generic password for seed user logins */
  }
};

// environment specific config overrides
var platformConfig = {
  development: {
    app: {
      port: 3000
    },
    mongo: {
      url: 'mongodb://localhost:27017/kamn-dev'
    }
  },

  test: {
    app: {
      port: 3001
    },
    mongo: {
      url: 'mongodb://localhost:27017/kamn-test'
    }
  },

  production: {
    app: {
      port: process.env.PORT || 3000,
      cacheTime: 7 * 24 * 60 * 60 * 1000 /* default caching time (7 days) for static files, calculated in milliseconds */
    },
    mongo: {
      url: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost:27017/kamn'
    }
  }
};

// override the base configuration with the platform specific values
module.exports = _.merge(baseConfig, platformConfig[baseConfig.app.env || (baseConfig.app.env = 'development')]);
