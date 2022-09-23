export const rollDices = () => {
    const nombreDices = 5;
    let dices = [];

    for (let index = 0; index < nombreDices; index++) {
        dices.push(Math.floor(Math.random() * 6) + 1)
        
    }

    return dices;
}

// 
export const results = (dices) => {
    let resultats = {}

    for (let index = 1; index <= 6; index++) {
        resultats[index] = 0
    }

    for (let index = 0; index < dices.length; index++) {
        Object.keys(resultats).forEach((key) => {
            if (dices[index] === Number(key)){
                resultats[key]++
            }
        })
        
    }

    return resultats;
}