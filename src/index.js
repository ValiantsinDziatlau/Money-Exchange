// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    try {
         if(currency>10000) throw {error:'You are rich, my friend! We don\'t have so much coins for exchange'};
         if(currency<=0) throw {};
    } catch (err) {
        return err;
    }
    let result={};
    let settings={'H':50, "Q":25, "D":10, "N":5, "P":1 };
    for (var key in settings) {
    if(currency>=settings[key]){
        result[key]=0;
        while(currency>=settings[key]){
            result[key]++;
            currency-=settings[key];
        }
    }
    }
    return result;
}
