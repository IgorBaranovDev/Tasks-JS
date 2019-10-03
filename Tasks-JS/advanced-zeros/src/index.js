module.exports = function getZerosCount(number, base) {
    let pseudoNum = number;  

    for ( let i = 2; i <= base; i++ ) {
      if ( base % i == 0) {
        let counterBase = 0;
        while (base % i == 0) {        
          base = Math.floor(base/i);   
          counterBase++;                     
        }     
        let counterNum = 0;
        let num = number;
        while ( num/i > 0 ) {      
          counterNum = counterNum + Math.floor(num/i);  
          num = Math.floor(num/i);        
        }
        pseudoNum  > counterNum /counterBase ?  pseudoNum = counterNum /counterBase :  false;                
      } 
    } 
    return Math.floor(pseudoNum);    
}