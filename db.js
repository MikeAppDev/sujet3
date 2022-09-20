import { application } from 'express';
import mongoose from 'mongoose'; 

export const connectDB = async() => {
    try {
        return mongoose.connect('mongodb+srv://mike:1234@cluster0.c9r8c0a.mongodb.net/?retryWrites=true&w=majority')
            
        // .then(r => console.log('connected to DB');
    } catch (error) {
        console.log(error);
    }


};