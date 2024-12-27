import "dotenv/config";
import http from "http";
import app from "./src/app.js";
import connectDB from "./src/config/db.connect.js";

const server = http.createServer(app);

const PORT = process.env.PORT;

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
  });
});
