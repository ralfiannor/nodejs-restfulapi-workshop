const db = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const server = 'ds033750.mlab.com:33750'
const database = 'restapi-workshop-bekasi'
const user = 'workshop'
const password = 'bekasi123'

const option = {
    useNewUrlParser: true,
    useCreateIndex: true
};

// connect to mongoDB server
db.connect(`mongodb://${user}:${password}@${server}/${database}`, option);

module.exports = { db, uniqueValidator };