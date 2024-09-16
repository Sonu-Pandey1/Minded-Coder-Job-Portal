// import mongoose  from "mongoose";
// import { DB_Name } from "../../Constants";

// const connectDB = async ()=>{

//     try {
//         let connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
//         console.log(`mongoDb Connected !! DB HOST : ${connectionInstance.connection.host} `)
//         .then(()=>{
//             console.log("db Connected")
//         })
        
//     } catch (error) {
//         console.log(" MongoDB connection error",error)
//         // process.exit(1)

//         // import.meta.env 
//     }

// }

// export default connectDB;