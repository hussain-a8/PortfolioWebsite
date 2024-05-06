let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select")

//from dropdown
currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropDown.add(option);
});


//to dropdown
currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toDropDown.add(option);
});

//setting default currencies
fromDropDown.value = "GBP";
toDropDown.value = "USD";


//function to convert currency
let convertCurrency = () => {
    const amount = document.querySelector("#amount").value;
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;

    if (amount.length != 0){
        fetch(api).then(resp => resp.json()).then(data => {
            let fromExchangeRate = data.conversion_rates[fromCurrency];
            let toExchangeRate = data.conversion_rates[toCurrency];
            const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
            result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`
        } );
    } else {
        alert("Please Enter A Value")

    }

};

//when clicked or loaded, function is executed
document.querySelector("#convert-button").addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency)
