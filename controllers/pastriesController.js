import PastriesModel from "../models/PastriesModel.js"

// next ? 
// on créer un const pour créer/ajouter un element par le biais du modèle homeModel 
export const createPastrie = async (req, res, next) => {
    let {name, quantity} = req.body
    PastriesModel.create({
        name: name,
        quantity: quantity
    })
    // La méthode then() renvoie un objet Promise
        .then((pastrie) => res.status(201).json({pastrie}))
        // renvoi l'erreur
        .catch((e) => res.status(400).json({error: e}))
}

export const getPastries = async (req, res) => {
    // res.status(200).json({ message: 'Hello World' })
    // find renvoit la valeur du premier element trouvé
    let data = await PastriesModel.find()
    res.status(200).json({data})
}