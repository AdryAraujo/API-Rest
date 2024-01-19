import mongoose, {mongo} from "mongoose"

async function conectaDatabase(){
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.qxkqc14.mongodb.net/livraria?retryWrites=true&w=majority")
    return mongoose.connection
}
 export default conectaDatabase;