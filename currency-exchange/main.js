let currencyRatio = {
    USD: {
        KRW: 1184.36,
        USD: 1,
        VND: 22972.50,
        unit: "달러"
    },
    KRW: {
        KRW: 1,
        USD: 0.00084,
        VND: 19.40,
        unit: "원"
    },
    VND: {
        KRW: 0.052,
        USD: 0.000044,
        VND: 1,
        unit: "동"
    }
};

let fromCurrency = "USD";

document.querySelectorAll("#from-currency-list a")
    .forEach((menu) =>  menu.addEventListener("click", function() {
        document.getElementById("from-button").textContent = this.textContent;
        fromCurrency = this.textContent;
        document.getElementById("from-unit").textContent = currencyRatio[fromCurrency]["unit"];
        convert();
    })
);

let toCurrency = "USD";

document.querySelectorAll("#to-currency-list a")
    .forEach((menu) =>  menu.addEventListener("click", function() {
        document.getElementById("to-button").textContent = this.textContent;
        toCurrency = this.textContent;
        document.getElementById("to-unit").textContent = currencyRatio[toCurrency]["unit"];
        convert();
    })
);

function convert(type) {
    if (type === "from") {
        let amount = document.getElementById("from-input").value;
        let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency]
        document.getElementById("to-input").value = convertedAmount    
    } else {
        let amount = document.getElementById("to-input").value;
        let convertedAmount = amount * currencyRatio[toCurrency][fromCurrency]
        document.getElementById("from-input").value = convertedAmount
    }
    
}

