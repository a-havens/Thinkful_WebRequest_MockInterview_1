const axios = require("axios");
//Write your functions here

async function getRates(base_currency) {
    const response = await axios.get(`https://api.frankfurter.app/latest?from=${base_currency}`);
    return response.data.rates || {};
}


//Do not modify code below this line
module.exports = {getRates};


