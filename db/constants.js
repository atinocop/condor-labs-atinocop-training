const NODE_ENV = process.env.NODE_ENV || 'development';
require('dotenv').config({
  path: `.env.${NODE_ENV}`,
});

module.exports.Settings = {
  connectionName: 'Cluster0',
  host: 'cluster0-shard-00-02.zxrpt.mongodb.net:27017',
  port: 27017,
  database: 'Cluster0',
  user: 'atinoco',
  password: process.env.DB_PASSWORD,
  replicaSet: 'compliance-support-shard-0',
  ssl: true,
  authSource: 'admin',
};
