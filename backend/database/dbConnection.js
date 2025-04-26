import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose
    .connect(process.env.MONGO_URI, {
        dbName: "RESTAURANT",
    })
    .then(() => {
        console.log("connect to database sucessfully!!");
    }).catch(err=> {
        console.log("Some error occured while connecting to the database");
        process.exit(1);
    });
};