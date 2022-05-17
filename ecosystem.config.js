module.exports = {
  apps: [
    {
      name: 'app-library',
      script: './src/index.js',
      watch: true,
      max_memory_restart: '500M',
      exec_mode: 'cluster',
      instancias: 1,
      autorestart: true,
      env: {
        NODE_ENV: 'development',
        HOST: '0.0.0.0',
        PORT: '4000',
      },
    },
  ],
};
