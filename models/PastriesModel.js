import mongoose from "mongoose";

// on crée la structure des éléments ?
const pastries = new mongoose.Schema({
    // un nom de type string
    name: {
        type: String,
        required: [true, 'This property name is required']
    },
    // une quantité numérique
    quantity: {
        type: Number,
        min: 0,
        max: 50,
        required: [true, 'This property is required']
    }
}, {
    // 
    timestamps: true
})

// on export la fonction
export default mongoose.model('Pastries', pastries)

// la valeur require ? : 