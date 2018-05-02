const db = require('../utils/database.js');

const schema = new db.Schema({
  thumbnail:{
    type: String
  },
  resources:{
    type: [[String], [String]]
  }
})

const Dress = db.model("dress", schema);

module.exports = Dress;