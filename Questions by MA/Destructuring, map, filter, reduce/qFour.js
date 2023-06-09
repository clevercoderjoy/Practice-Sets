const stockData = {
    stocks: [
        {
            symbol: "AAPL",
            name: "Apple Inc.",
            prices: [
                { date: "2022-03-01", price: 138.54 },
                { date: "2022-03-02", price: 142.76 },
                { date: "2022-03-03", price: 144.11 },
                { date: "2022-03-04", price: 143.98 },
                { date: "2022-03-05", price: 145.6 },
            ],
        },
        {
            symbol: "GOOGL",
            name: "Alphabet Inc.",
            prices: [
                { date: "2022-03-01", price: 2749.5 },
                { date: "2022-03-02", price: 2778.79 },
                { date: "2022-03-03", price: 2787.44 },
                { date: "2022-03-04", price: 2792.76 },
                { date: "2022-03-05", price: 2768.25 },
            ],
        },
        {
            symbol: "MSFT",
            name: "Microsoft Corporation",
            prices: [
                { date: "2022-03-01", price: 249.22 },
                { date: "2022-03-02", price: 252.96 },
                { date: "2022-03-03", price: 253.57 },
                { date: "2022-03-04", price: 251.68 },
                { date: "2022-03-05", price: 254.16 },
            ],
        },
    ],
};


// 1. create an array of objects which includes `symbol` and `prices` array of date after `“2022-03-02”` only
// 2. create an array of objects which include `name` and average stock price of the stock

const symbolAndPrice = (stockData) => stockData.stocks.map((stock) => ({symbol: stock.symbol, price: stock.prices.filter((price) => price.date > "2022-03-02")}.price));
console.log(symbolAndPrice(stockData));

const nameAndAverageStock = (stockData) => stockData.stocks.map((stock) => ({name: stock.symbol, averagePrice: (stock.prices.reduce((acc, curr) => (acc + curr.price), 0) / stock.prices.length)}));
console.log(nameAndAverageStock(stockData));