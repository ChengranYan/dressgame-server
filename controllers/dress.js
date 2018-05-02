const axios = require('axios');
const path = require('path');
const walk = require('walk');
const fs = require('fs');
// const Dress = require('../model/dressgame.js');

const resource1_reg = /_1_/
const thumbnail_reg = /thumbnail/
const rest_reg = /(.png$)|(.json$)/

const getList = (req, res, next) => {
  axios({
    method: 'get',
    url: 'https://api-test.yangcong345.com/cosplay/handbook',
    headers: {
      Authorization: req.headers.authorization
    }
  }).then((result) => {
    // console.log(result.data)
     res.json(result.data)
  })
}

const getDetail = (req, res, next) => {
  axios({
      method: 'get',
      url: `https://api-test.yangcong345.com/cosplay/handbook/${req.params.part}/${req.params.id}`,
      headers: {
        Authorization: req.headers.authorization
      }
    }).then((result) => {
      var { data } = result
      res.json(data)
    })
}

const getTest = (req, res, next) => {
  walkdir(req, res, next)
}

const walkdir = (req, res, next) => {
  var walker;
  var directoryPath = '/home/master/dressgame-express/dressgame-server/public'

  var options = {
    followLinks: false
    // directories with these keys will be skipped
  , filters: ["Temp", "_Temp", ".DS_Store", "static"]
  };

  walker = walk.walk(directoryPath, options);
  var hostName = 'http://10.8.8.8:60000/';
  var data = []
  // walker.on("file", function (root, fileStats, next) {
  //   if(fileStats.name.indexOf('DS_Store') === -1) {
  //     var paths = root.split('/')
  //     var path = paths[paths.length - 1]
  //     console.log(path)
  //     next()
  //   }
  walker.on('directories', function (root, dirStatsArray, next) {
    // console.log(root)
    // console.log(dirStatsArray.length)
    // next()

    dirStatsArray.forEach((item) => {
      //do stuff
      var obj = {}
      fs.readdir(path.join(root,item.name), function (err, files) {
        obj[item.name] = files
        // obj[item.name].push(files)
        data.push(obj)
        next();
      });
      // console.log(item.name)
    })
  })
 
  walker.on("errors", function (root, nodeStatsArray, next) {
    next();
  });
 
  walker.on("end", function () {
    var resultData = data.map(item => {
      for(var name in item) {
        var prefix = hostName + name
        console.log(prefix)
        item[name] = item[name].map((i) => {
          if(i !== '.DS_Store') {
            return prefix + '/' + i
          }
        })
      }
      return item
    })
    var ret = []
    var result = resultData.map((item) => {
      var thumbnail = ''
      var res1 = []
      var res2 = []
      for(var val in item) {
        item[val].forEach((currentValue, index, arr) => {
          if(!currentValue){
             // console.log(currentValue)
          }else if(thumbnail_reg.test(currentValue)){
            thumbnail = currentValue
          }else if(resource1_reg.test(currentValue)){
            res1.push(currentValue)
          }else if(rest_reg.test(currentValue)){
            res2.push(currentValue)
          }
        })
      }
      ret.push({
        thumbnail: thumbnail,
        resources: [
          res1,
          res2
        ]
      })
      })
    res.json({
      data:ret
    })
  });
}


module.exports = {
  getList,
  getDetail,
  getTest
}