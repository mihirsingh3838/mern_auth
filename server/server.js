import { config } from "dotenv";
import app from "./app.js";
import connectionToDb from "./config/dbConnection.js";

config();

const PORT= process.env.PORT || 5000;

app.listen(PORT, async ()=>{
    await connectionToDb();
    console.log(`App is running at http:localhost:${PORT}`);
})