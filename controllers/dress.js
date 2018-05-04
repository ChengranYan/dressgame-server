const axios = require('axios');
const path = require('path');

// const baseDir = '/Users/chengran/Desktop/api-server/public/'
const baseDir = path.join(__dirname, '..', 'public') + '/'

const hostPrefix = 'http://10.8.8.8:60000/'
const resource1_reg = /_1_/
const thumbnail_reg = /thumbnail/
const rest_reg = /(.png$)|(.json$)/



const klawSync = require('klaw-sync')
const walk = require('walk-promise');

const getFiles = (dir, gender) => {
  return walk(dir).then(function (files) {
    var res1 = [],
      res2 = [],
      thumbnail = '';
    files.forEach((item) => {
      directory = item.root.split('/')[item.root.split('/').length-1]
      if (item.name.indexOf('DS_Store') === -1) {
        if (thumbnail_reg.test(item.name)) {
          thumbnail = item.name
        } else if (resource1_reg.test(item.name)) {
          res1.push(hostPrefix + gender + '/' + directory + '/' + item.name)
        } else if (rest_reg.test(item.name)) {
          res2.push(hostPrefix + gender + '/' +directory + '/' + item.name)
        }
      }
    })

    return Promise.resolve({
      thumbnail: thumbnail,
      resources: [
        res1,
        res2
      ]
    })
  });
}


const getGenderData = (gender) => {
  var dir = baseDir + gender
  const data = []
  var files = klawSync(dir, { nofile: true })
  var allPromises = files.map((file) => {
    return getFiles(file.path, gender)
  })
  return allPromises
}


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
  var male =  getGenderData('male')
  var female = getGenderData('female')

  var malePromise = Promise.all(male)
  var femalePromise = Promise.all(female)

  Promise.all([malePromise, femalePromise])
  .then((data) => {
    res.json({
      maleData: data[0],
      femaleData: data[1]
    })
  })
  
}


module.exports = {
  getList,
  getDetail,
  getTest
}