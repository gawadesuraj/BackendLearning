import "dotenve/config.js";
import app from "/src/app.js";
import connectDB from "./common/config/db";
const PORT = process.env.PORT || 5000;

const start = async () => {
    //db connect
    await connectDB().catch((err)=>{
        console.log(`DB connection failed with error : ${err}`);
    });
    app.listen(PORT, () => {
        console.log(`server is running at the ${PORT} in ${process.env.NODE_ENV}`);
    });
};

start().catch((err) => {
  console.log(`faild to start server`);
  process.exit(1);
});
