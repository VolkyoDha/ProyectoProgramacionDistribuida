const axios = require('axios');

const getConversionRate = async (fromCurrency, toCurrency) => {
    const apiKey = process.env.CURRENCY_API_KEY;
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    try {
        const response = await axios.get(url);
        const rate = response.data.rates[toCurrency];
        return rate;
    } catch (error) {
        console.error('Error fetching conversion rate:', error);
        throw new Error('Unable to fetch conversion rate');
    }
};

module.exports = { getConversionRate };
