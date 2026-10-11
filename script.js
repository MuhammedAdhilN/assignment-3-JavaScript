// Product details
let item = "MOBILE PHONE";
let price = 1200;
let discount = 15;
let tax = 5;
let status = "in_stock";

// Function to calculate discounted price
function calculateDiscountedPrice(p, d) {
    let amt = (p * d) / 100;
    return p - amt;
}

// Function to calculate tax amount
function calculateTax(p, r) {
    return (p * r) / 100;
}

// Function to calculate final price
function calculateFinalPrice(p, d, r) {
    let discounted = calculateDiscountedPrice(p, d);
    let tAmount = calculateTax(discounted, r);
    return discounted + tAmount;
}

// Function to check free shipping
function isFreeShipping(final) {
    if (final >= 500) {
        return "Free Shipping";
    } else {
        return "Shipping: Rs.49";
    }
}

// Function to get stock message using switch
function getStockMessage(s) {
    switch (s) {
        case "in_stock":
            return "In Stock";
        case "limited":
            return "Limited Stock";
        case "out_of_stock":
            return "Out of Stock";
        default:
            return "Unknown";
    }
}

// Final execution and output printing
let discountedPrice = calculateDiscountedPrice(price, discount);
let taxAmount = calculateTax(discountedPrice, tax);
let finalPrice = calculateFinalPrice(price, discount, tax);
let shippingInfo = isFreeShipping(finalPrice);
let stockInfo = getStockMessage(status);

console.log("Product: " + item);
console.log("Discounted Price: " + discountedPrice);
console.log("Tax: " + taxAmount);
console.log("Final Price: " + finalPrice);
console.log("Shipping: " + shippingInfo);
console.log("Stock Status: " + stockInfo);