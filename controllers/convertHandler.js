/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    
    // verified space between two number
    let reg1 = /(\d\s{1,}\d)|([+-/*][/*])/g;
    // verified the structure to the begin and  
    let reg2 = /^[+-.\s]?(\d{1,}([+.\s*/-]{1,})?){1,}(\d)?/g;
    // verified if string contain space or two `.` into number  because `eval()` returns an  system erro with them
    let re   =/(\s[.][+*/-])|([+*/-][.]\s)|([.]\d{1,}[.])|([.]{2,})/g;
    // takes empty string
    let reg3 = /^((\s{1,})?([-+]{1,})?(\s{1,})?[a-z])/ig
    
    if(!reg1.test(input) && reg2.test(input) && !reg2.test(input)){
      let getnum = input.match(/^[+-.\s]?(\d{1,}([+.\s*/-]{1,})?){1,}(\d)?/g)[0];
      // /^[+-.\s]?(\d{1,}([+.\s*/-]{1,})?){1,}\d/g
      // move any caractere on the end
      let result = getnum.replace(/[+.-/*]{1,}$/, '')
      // move space at the end of num string
      result = result.replace(/\s{1,}$/, '');
      // replace `++++++...` by `+`
      result = result.replace(/[+]{1,}/, '+');
      // replace `+-` or `-+` by `-`
      result = result.replace(/([+][-]){1,}|([-][+]){1,}/g, '-');
      //replace `----------etc..` by `-`
      result = result.replace(/[-]{1,}/g, '-');
      
      // verified if string contain space or two `.` into number  because `eval()` returns an  system erro with them
      var reg = /(\s[.][+*/-])|([+*/-][.]\s)|([.]\d{1,}[.])|([.]{2,})/g;
      
      if (re.test(result)) { 
        console.log((reg.test(result))? 'Number1 :'+' invalid number':'Number1 :'+Number(eval(result).toFixed(5)));
        return " invalid number";
      }
      else {
        console.log((reg.test(result))? 'Number2 :'+' invalid number' : 'Number25 :' + Number(eval(result).toFixed(5)));  
        return Number(eval(result).toFixed(5));
      }
    }
    else if(reg3.test(input)){
      // when there no number but unity
      let sig = input.match(/^((\s{1,})?([-+]{1,})?(\s{1,})?)/ig)
      console.log('Number :'+eval(sig[0]+'1'));
      return eval(sig[0]+'1')
    }  
    else {
      console.log('Number :'+" invalid number")
      return " invalid number";
    }  
  };
  
  
  this.getUnit = function(input) {
    let unit = input.match(/[a-z]{1,}$/gi);
    let arrUnit = ["gal","l", "mi", "km", "lbs", "kg"];
    let reg = /[a-z]{1,}$/gi;
    if(reg.test(input)){
      var result = unit[0].toLowerCase();
      if(arrUnit.indexOf(result)>=0){
        console.log('Unity :'+result.toLowerCase());
        return result.toLowerCase();
      }else{
        console.log('Unity :'+'invald unit1')
        return 'invalid unit'  
      }
    }
    else{
      console.log('Unity :'+'invald unit2')
      return 'invalid unit'
    };
  }
  
  
  this.getReturnUnit = function(initUnit) {
    let arrUnit = ['gal','l','mi','km','lbs','kg'];
    if(arrUnit.indexOf(initUnit)>= 0){
      let indexCovert = arrUnit.indexOf(initUnit);
      let arrCovert   = ['l','gal','km','mi','kg','lbs']
      var result      = arrCovert[indexCovert];
      console.log('ReturnUnit :'+ result);
      return result;
    }
  };

  this.spellOutUnit = function(unit) {
    let arrSpell = {gal: 'gallons',l: 'liters',mi: 'miles ',km: ' kilometers',lbs: ' pounds',kg: 'kilograms'}
      var result = arrSpell[unit];
      console.log(result);
      return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch(initUnit){
      case'gal':
        result = initNum * galToL;
        console.log(result+'it is my');
        return Number(result.toFixed(5));
        break;
      case'l':
        result = initNum / galToL;
        console.log(result);
        return Number(result.toFixed(5));
        break;
      case'lbs':
        result = initNum * lbsToKg;
        console.log(result);
        return Number(result.toFixed(5));
        break;
      case'kg':
        result = initNum / lbsToKg;
        console.log(result);
        return Number(result.toFixed(5));
        break;
      case'mi':
        result = initNum * miToKm;
        console.log(result);
        return Number(result.toFixed(5));
        break;
      case'km':
        result = initNum / miToKm;
        console.log(result);
        return Number(result.toFixed(5));
        break;
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit, input) {
    if (isNaN(Number(initNum))|| initUnit === undefined ) {
      var result = 'Error - '+ input;
      console.log(result);
      return result;
      
    }else{
      var result = initNum +''+ initUnit +' coverts to '+ returnNum+' '+returnUnit
      console.log(result);
      return result;
    }
  }
  
}

module.exports = ConvertHandler;
