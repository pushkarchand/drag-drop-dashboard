let mongoose = require('mongoose');
let config=require('../../config/development');
mongoose.connect(`mongodb+srv://${config.userName}:${config.pwd}@cluster0.yl4uo.mongodb.net/<dbname>?retryWrites=true&w=majority`,{ useNewUrlParser: true,useUnifiedTopology: true });

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error : '));
db.once('open', function(){
  console.log('Connection ok!');
});

module.exports = mongoose;