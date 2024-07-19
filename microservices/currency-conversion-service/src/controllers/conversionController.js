const { getConversionRate } = require('../utils/currencyAPI');

const convertCurrency = async (req, res) => {
    const { fromCurrency, toCurrency, amount } = req.body;

    try {
        const rate = await getConversionRate(fromCurrency, toCurrency);
        const convertedAmount = amount * rate;
        res.json({ fromCurrency, toCurrency, amount, convertedAmount, rate });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { convertCurrency };
