/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input            = req.query.input;
      var initNum          = convertHandler.getNum(input);
      var initUnit         = convertHandler.getUnit(input);
      var spelloutInitUnit = convertHandler.spellOutUnit(initUnit);
      var returnNum        = convertHandler.convert(initNum, initUnit);
      var returnUnit       = convertHandler.getReturnUnit(initUnit); 
      var spelloutReturnUnit = convertHandler.spellOutUnit(returnUnit);
      var toString         = convertHandler.getString(initNum,  spelloutInitUnit, returnNum,  spelloutReturnUnit, input);
      
      if (isNaN(Number(initNum))&& initUnit ==='invalid unit') {
        
        res.json({result:{error: 'invalid number and unit'},string: toString});               
      }
      else if( isNaN(Number(initNum)) ) {
        
        res.json({result:{error: 'invalid number'},string: toString});
      }
      else if (initUnit ==='invalid unit') {
        
        res.json({result:{error: 'invalid unit'},string: toString});
      } 
      else {
      
        res.json({result:{initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: toString}, string: toString});
      }
    });
    
};
 