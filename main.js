/*
-- MathPower@1.0.0 < \ Elnior Loreh / > --
last update: Fri, 12 july of the year 2024
*/
// Spanish:
// La clase MathPower es la clase que
// tiene que ser capaz de realizar
// operaciones con números reales con
// mayor amplitud y precisión.

// English:
// The MathPower class is the class that
// must be able to perform 
// operations with real numbers with 
// greater breadth and precision.

export default class MathPower {
  static purifier (actual) {
    try {
      let forReplace = '',
        isBreak = false;
      let unitPosition = 0;
      // for start
      for (let pos = 0; pos < actual.length; pos++) {
        if (actual[pos] == '0' && actual[pos + 1] == '.') {
          // important intervention
          while (pos < actual.length)
            forReplace += actual[pos++];
          break;
        }
        else if (actual[pos] == '0')
          continue;
        else {
          for (; pos < actual.length; pos++)
          {
            if (actual[unitPosition = pos] == '.') {
              isBreak = true;
              break;
            }
            forReplace += actual[pos];
          }
          break;
        }
      
      }
      // for end
      for (let pos = actual.length - 1; pos >= 0 && isBreak; pos--) {
        if (actual[pos] == "0" && actual[pos - 1] == ".")
          break;
        else if (actual[pos] == "0")
          continue;
        else {
          let fracts = [];
          for (; pos >= unitPosition; pos--)
          {
            fracts.push(actual[pos]);
            if (actual[pos] == '.')
              break;
          }
          forReplace += fracts.reverse().join('');
          break;
        }
      }
      return forReplace;
    }
    catch (error) {
      throw error;
    }
  }
  static validator (matriz) {
    try {
      for (let element of matriz) {
        element = element.trim();
        if (typeof element == 'string' && element !== '') {
          if (element[0][0] == '.')
            throw new Error(`The input "${element}" in not valid`);
          else;
          let countPoint = 0,
            countSymbol = 0;
          for (let char of element) {
            if (/\d/.test(char));
            else if ('.' == char) countPoint++;
            else if (/\+|\-/.test(char))
              throw new Error(`The + and - symbols is not acceptable`);
            else if (/\+|\-/.test(char));
      
            else throw new Error(`The char ${char} is not a number`);
          }
          if (countPoint > 1)
            throw new Error(`There are more than two decimal points`);
        }
        else throw new Error(`The value "${element}" is not valid string.`);
      }
    }
    catch (error) {
      console.warn(error.message);
    }
  }
  static sum (...elements) {
    // validator \/ \/ \/ \/
    if (elements.length < 2)
      return elements[0];
    else 
      MathPower.validator(elements);
      
    // purifying iterator
    for (let index = 0; index < elements.length; index++)
      elements[ index ] = MathPower.purifier(elements[ index ]);
      // Well done ^^^^^^^
    
    // I correct the total annihilation of zero
    elements = elements.map(value => (value == "")? "0" :  value);
    
    // Hasta aquí los elementos son válidos y puros.
    let [ actual ] = elements;
    // addition loop:
    for (let index = 1; index < elements.length; index++) {
      let result = [];
      let elementActual = elements[index].split("");
      const units = actual.split("");
      // Unit placement error prevention block.
      if (units.indexOf(".") !== -1 ||  elementActual.indexOf(".") !== -1) {
        if (units.indexOf(".") == -1)
          units.push(".");
        else if (elementActual.indexOf(".") == -1)
          elementActual.push(".");
      }
      let lastDx = (units.length > elementActual.length? units.length : elementActual.length) - 1;
      // Position of the most relevant unit
      let [pos1, pos2] = [units.indexOf("."), elementActual.indexOf(".")];
      let pointPresent = pos1 !== -1 || pos2 !== -1;
      let minPos = (pos1 < pos2? pos1 : pos2) - 1;
      let unitPos =  (pos1 > pos2)? pos1-1: (pos2 === -1)? lastDx : pos2-1;
      let position = 0;
      // Completer loop:
      while (position <= unitPos) {
        let unit1 = units[position],
          unit2 = elementActual[position];
        if (pointPresent) {
          // The relevant and secondary value
          let relevant = (pos1 > pos2)? units : elementActual;
          let other = (pos1 < pos2)? units : elementActual;
          let count = 1;
          // Loop from the relevant unit point to the highest unit detected
          while(count <= (unitPos - minPos)) {
            other.unshift("0");
            count++;
          }
          // From here the rational point of both is in the same position
          
          let longLength = (elementActual.length > units.length)? elementActual.length : units.length;
          // Point position
          count = unitPos+1;
          while (count < longLength) {
            if (elementActual[count] == undefined)
            elementActual.push("0");
            else { }
            
            if (units[count] == undefined)
            units.push("0");
            else {}
            count++;
          }
          break;
        }
        else {
          if (unit1 == undefined)
            units.unshift("0");
          
          else if (unit2 == undefined)
            elementActual.unshift("0");
        }
        position++;
      }
      
      lastDx = units.length > elementActual.length? units.length : elementActual.length;
      let value = 0;
      // Adding Minimum Units to Large Units Loop
      while (lastDx > 0) {
        --lastDx;
        // current units for addition
        let unit1 = units[lastDx],
        unit2 = elementActual[lastDx];
        
        if (unit1 == ".") {
          result.unshift(".");
          continue;
        }
        let operation = Number(unit1) + Number(unit2) + value;
        
        if (operation > 9) value = 1;
        else value = 0;
        
        operation = String(operation);
        let lastValue = operation[operation.length-1];
        
        result.unshift(lastValue);
        
        if (lastDx == 0 && value == 1)
          result.unshift(value);
      }
      // update the variable actual.
      actual = result.join("");
    }
    // the total addition
    return MathPower.purifier( actual );
  }
}