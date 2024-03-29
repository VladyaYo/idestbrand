module.exports = {
  apps : [{
    name : "server",
    script : "server.js",
    cwd : "./backend/",
    exec_mode : "cluster_mode",
    instances : 2,
    max_memory_restart: '400M',
    env: {
      "NODE_ENV": "development",
    },
    env_development : {
       "NODE_ENV": "production"
    }
  },
  {
    name : "next",
    cwd : "./frontend/",
    script: 'node_modules/next/dist/bin/next',
    args:"start -p 8080",
    instances : 1,
    stop: 0,
    exec_mode : "cluster_mode",
    max_memory_restart: '300M',
     env: {
      "NODE_ENV": "production",
      "PORT": 80,
      "API_URL": 'https://idestbrand.com',
    },
    env_development : {
       "NODE_ENV": "development",
       "PORT": 80,
    }
  },
  ]
}
