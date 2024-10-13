export const BASE_URL = "../../";       // root path url

// // For Indian Rupees
// export const INR_CURRENCY = Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" });

// // For US Doller
// export const GB_CURRENCY = Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

// // For British Pound
// export const GB_CURRENCY = Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" });

export const currencyConverter = (amount, format) => { 
    if (format === "INR") {
        amount = amount * 110.0182;
        const INR_CURRENCY = Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" })
        return INR_CURRENCY.format(amount)

    } else if (format === "GBP") {
        const GB_CURRENCY = Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" });
        return GB_CURRENCY.format(amount)

    } else if(format === "USD"){
        amount = amount * 1.3119;
        const US_CURRENCY = Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
        return US_CURRENCY.format(amount)
    } else{
        return "Price is Unavailable"
    }
}