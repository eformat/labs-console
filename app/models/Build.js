var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
var validate = require('mongoose-validator');
var autoIncrement = require('mongoose-auto-increment');

var BuildSchema = new Schema({
    topology: { type: Number, ref: 'Topology' },
    topology_version: { type: Number, required: true},
    topology_version_key: {type: Number},
    number_of_projects: { type: Number, required: true},
    number_of_stages: { type: Number, required: true},
    ansible_tower_link: { type: String},
    status: {type: String},
    tower_job_id: {type: Number},
    datetime_started: {type: Date},
    datetime_completed: {type: Date}
  },
  {
    //http://mongoosejs.com/docs/guide.html#timestamps
    timestamps: { updatedAt: 'updated_at' },
    //http://mongoosejs.com/docs/guide.html#versionKey
    versionKey: 'version'
  }
);

BuildSchema.virtual('id').get(function(){
  return this._id;
});

BuildSchema.set('toJSON', {
  virtuals: true
});

BuildSchema.plugin(autoIncrement.plugin, 'Build');
module.exports = mongoose.model('Build', BuildSchema);