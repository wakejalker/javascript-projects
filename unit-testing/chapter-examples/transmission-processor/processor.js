function processor(transmission) {

    // trim leading and trailing whitespace
    const trimmedTransmission = transmission.trim(); 

    // check if transmission contains ::
    if (trimmedTransmission.indexOf("::") < 0) {
        return -1;
    }

    let parts = trimmedTransmission.split("::");
    let rawData = parts[1];

    // check if exctracted data (rawData) contains valid start and end symbols < > 
    if (rawData[0] !== "<" || rawData[rawData.length - 1] !== ">") {
        return -1;
    }

    // check if there are additional < symbols
    if (rawData.indexOf("<", 1) !== -1) {
        return {
            id: Number(parts[0]),
            rawData: -1
        }
    }

    // extract data between < > 
    let dataBtwnSymbols = rawData.slice(1, -1);
    for (let i = 0; i < dataBtwnSymbols.length; i++) {
        if (isNaN(parseInt(dataBtwnSymbols[i]))) {
            // if there are no numbers between < > transmission is invalid 
            return {
                id: Number(parts[0]), // extract and MAKE IT A NUMBER!
                rawData: -1
            };
        }
    }

    return {
        id: Number(parts[0]),
        rawData: dataBtwnSymbols
    };
}

module.exports = processor;