import mongoose from 'mongoose'; 

export const connectDB = () => {
    try {
        mongoose.connect(uri: 'mongodb://').then(r => console.log('connected to DB'));
    } catch (error) {
        console.log(error);
    }
};