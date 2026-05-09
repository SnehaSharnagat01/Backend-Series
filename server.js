let app = require("./src/app.js");
const connectDb = require("./src/config/db.js");
connectDb()

app.listen(3000, () => {
  console.log("server running on port 3000");
});
