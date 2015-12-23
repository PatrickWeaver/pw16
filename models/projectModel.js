var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var projectModel = new Schema({
  name: {
    type: String
  },
  visible: {
    type: Boolean, default: true
  }
});

module.exports = mongoose.model('Project', projectModel);