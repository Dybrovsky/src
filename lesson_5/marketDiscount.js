const marketDiscount = (bucket, number, promo) => {
    let result = bucket;
    if (promo === '300' && bucket > 300) { 
        result = bucket - 300;
    } if (bucket < 300 && promo === '300') { 
        result = 0;
    } if (number > 9) {
        result = bucket - (bucket / 100) * 5;
    } if (bucket > 50000) {
        result = bucket - ((bucket - 50000) / 100 * 20); 
    } if (promo === '15' && bucket >= 20000) {
        result = bucket - (bucket / 100 * 15);
    }



    return result;
}

console.log(marketDiscount('60000', '10', '15'));