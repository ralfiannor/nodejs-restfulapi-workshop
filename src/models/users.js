const { db, uniqueValidator, idValidator } = require('../config/db.js');
const UserSchema = new db.Schema({
  name: String,
  email: {
      type: String,
      unique: true,
      required: true,
      dropDups: true
  }
},
{
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

UserSchema.plugin(uniqueValidator);

module.exports = db.model('Users', UserSchema);