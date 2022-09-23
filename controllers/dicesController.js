import { results, rollDices } from '../utils/utils.js';

export const getDices = async  (req, res ) => {
    let dices= rollDices();
    let result = results(dices);

    res.status(200).json({result: result, dices: dices})
}