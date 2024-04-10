const connectDb = require("./db/db");
const app = require("./app");
const PORT = process.env.PORT || 5000;

require("dotenv").config();


app.listen(PORT, console.log(`CCRA Server Running localhost:${PORT}`));

connectDb();

