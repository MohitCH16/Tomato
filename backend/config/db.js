import mongoose from 'mongoose'

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mohitju25:mhMH123@cluster0.vslqz2m.mongodb.net/food-del')
    .then(()=>console.log("DB Connected"));
}