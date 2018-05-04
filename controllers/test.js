// const baseDir = '/Users/chengran/Desktop/api-server/public/'
// const hostPrefix = 'http://10.8.8.8:60000/'
// const resource1_reg = /_1_/
// const thumbnail_reg = /thumbnail/
// const rest_reg = /(.png$)|(.json$)/

// const klawSync = require('klaw-sync')
// const walk = require('walk-promise');

// const apiData = []

// const getFiles = (dir, gender) => {
//   return walk(dir).then(function (files) {
//     var res1 = [],
//       res2 = [],
//       thumbnail = '';
//     files.forEach((item) => {
//       if (item.name.indexOf('DS_Store') === -1) {
//         if (thumbnail_reg.test(item.name)) {
//           thumbnail = item.name
//         } else if (resource1_reg.test(item.name)) {
//           res1.push(hostPrefix + gender + '/' + item.name)
//         } else if (rest_reg.test(item.name)) {
//           res2.push(hostPrefix + gender + '/' + item.name)
//         }
//       }
//     })

//     return Promise.resolve({
//       thumbnail: thumbnail,
//       resources: [
//         res1,
//         res2
//       ]
//     })
//   });
// }


// const getGenderData = (gender) => {
//   var dir = baseDir + gender
//   const data = []
//   var files = klawSync(dir, { nofile: true })
//   var allPromises = files.map((file) => {
//     return getFiles(file.path, gender)
//   })
//   return allPromises
// }

// var male =  getGenderData('male')
// var female = getGenderData('female')

// var malePromise = Promise.all(male)
// var femalePromise = Promise.all(female)

// Promise.all([malePromise, femalePromise])
// .then((data) => {
//   console.log({
//     maleData: data[0],
//     femaleData: data[1]
//   })
// })
const path = require('path')
const baseDir = path.join(__dirname, '..', 'public')
console.log(baseDir)