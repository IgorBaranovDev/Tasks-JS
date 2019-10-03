// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

   if (currency > 10000) {
      return result = { error: "You are rich, my friend! We don't have so much coins for exchange" };
   }

   if (currency <= 0) {
      return result = {};
   }

   const money = { "H": 0, "Q": 0, "D": 0, "N": 0, "P": 0 };

   let h = Math.floor(currency / 50);
   currency %= 50; //currency = currency % 50;

   let q = Math.floor(currency / 25);
   currency %= 25;

   let d = Math.floor(currency / 10);
   currency %= 10;

   let n = Math.floor(currency / 5);
   currency %= 5;

   let p = Math.floor(currency / 1);

   if (h != 0) {
      money["H"] = h;
   } else delete money["H"];

   if (q != 0) {
      money["Q"] = q;
   } else delete money["Q"];

   if (d != 0) {
      money["D"] = d;
   } else delete money["D"];

   if (n != 0) {
      money["N"] = n;
   } else delete money["N"];

   if (p != 0) {
      money["P"] = p;
   } else delete money["P"];

   return money;
}