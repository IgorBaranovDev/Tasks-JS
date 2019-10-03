module.exports = function solveEquation(equation)  {
  let a=0, 
      b=0,
      c=0,
      bArr=[],
      cArr=[],
      D=0,
      x1=0,
      x2=0,
      result=[],
      equArr = equation.split('*');               // [2,x^2_-10_,x_+12_] = a*x^2 -+ b*x -+ c]

      aArr = a = equArr[0];                       // [ a = 2 ]
      bArr = equArr[1].split('x^2');              // [ b = -10 ]
      cArr = c = equArr[2].split('x');            // [ c = +12 ]
      b = bArr[1].split(' ').join('');            // remove spaces
      c = cArr[1].split(' ').join('');
      D = b*b-4*a*c;                              // Diskriminant
    if ( D < 0 ) {
        return result.push('no solution');
    }
    else if ( D === 0 ) {
        x1 = x2 = -b/2*a;
        return result.push(x1,x2);
    }
    else {
      x1 = Math.round((-b+Math.sqrt(D))/(2*a));
      x2 = Math.round((-b-Math.sqrt(D))/(2*a));
        if ( x1 < x2 ) {
          result.push(x1,x2);
        }
        else {
          result.push(x2,x1);
        }
    }
    return result;  
}