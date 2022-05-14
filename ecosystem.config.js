module.exports = {
  apps: [
    {
      name: 'app-library',
      script: './src/index.js',
      watch: false,
      max_memory_restart: '1000M',
      exec_mode: 'cluster',
      instancias: 1,
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
