import mongoose, {mongo} from "mongoose";

async function conectaDatabase(){
  mongoose.connect(process.env.DB_CONECTION);
  return mongoose.connection;
}
export default conectaDatabase;