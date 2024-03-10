function convertToPrice(num) {
    return (num / 100).toFixed(2);
}

function floatToPercentage(num) {
    return (String(num*100)+"%");
}

export { convertToPrice, floatToPercentage };