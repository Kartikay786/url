import mongoose from "mongoose";

export const dbConnection = () => {
    const Uri = process.env.MONGOURI;
    mongoose.connect(Uri)
        .then(() => {
            console.log('Db Connected')
        })
        .catch((err) => {
            console.log(err)
        })
}