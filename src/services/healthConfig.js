const { dependencyServices, statusType } = require('@condor-labs/health-middleware');
const settings = require('../package/mongoDB/mongoConstansDB');
const NODE_ENV = process.env.NODE_ENV || 'development';
require('dotenv').config({
  path: `.env.${NODE_ENV}`,
});

const healthConfig = {
  service: 'custom service',
  description: 'my project',
  checks: [
    {
      componentName: 'mongodb', //Object
      componentType: statusType.DATASTORE,
      callback: () => settings.connect(),
    },
  ],
  dependencies: [
    {
      service: dependencyServices.MONGODB,
      componentName: 'MyMongoDB',
      connection: {
        host: 'cluster0-shard-00-02.zxrpt.mongodb.net:27017',
        port: process.env.PORT_BD,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        replicaSet: 'compliance-support-shard-0', //optional
        ssl: true,
        authSource: 'admin',
      },
    },
  ],
  urls: ['https://www.google.com', 'https://www.opendns.com'],
  path: '/custom',
  version: '1.0',
  alias: 'machine0',
};

module.exports = healthConfig;
