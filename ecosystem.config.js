[
  {
    "name": "dressgame-devtools",
    "script": "./bin/www",
    "interpreter":"node@8.9.0",
    "exec_mode" : "fork",
    "instances" : 1,
    "args": "log",
    "log_date_format": "YYYY-MM-DD HH:mm Z",
    "watch": false,
    "merge_logs"  : true,
    "env": {
      "NODE_PORT": 60000,
      "NODE_ENV": "development",
      "SEND_RESTART_SMS": true
    }
  }
]

