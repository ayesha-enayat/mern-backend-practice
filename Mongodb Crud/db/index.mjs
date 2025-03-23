import mongoose from "mongoose";
import 'dotenv/config';

const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ayeshacluster0.cwvnn.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=AyeshaCluster0`;

mongoose.connect(url)
    

export default mongoose;
