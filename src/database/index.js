const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/noderest', { useMongoClient: true })

mongoose.Promise = global.Promise;

<<<<<<< Updated upstream
module.exports = mongoose;
=======
module.exports = mongoose;  
>>>>>>> Stashed changes
