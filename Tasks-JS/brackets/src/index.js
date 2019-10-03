module.exports = function check(str, bracketsConfig) {

    let pairArray = [];
    let strLength = str.length;

    for (let i = 0; i < bracketsConfig.length; i++) {
        pairArray.push(bracketsConfig[i].join(''));    //console.log(pairArray);
    }
                                                       //console.log(pairArray.length);
    for (let j = 0; j < strLength; j++) {
        for (let k = 0; k < pairArray.length; k++) {
            if (str.includes(pairArray[k])) {
                str = str.replace(pairArray[k], '');   // console.log(str);
            }
        }
    }
                                                       //console.log(str.length);
    return str.length == 0 ? true : false;
}