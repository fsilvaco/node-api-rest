const mongoose = require("mongoose");

const user = process.env.DB_USER
const pass = process.env.DB_PASS
const host = process.env.DB_HOST
const port = process.env.DB_POST
const dbname = process.env.DB_NAME


mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${user}:${pass}@${host}:${port}/${dbname}?authSource=admin`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("DB connected!")
}).catch((error) => {
  console.log(`Message: ${error.message}`)
})

module.exports = mongoose;
