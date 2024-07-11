// La clase MathPower es la clase que
// tiene que ser capaz de realizar
// operaciones con números reales con
// mayor amplitud y presición.
class MathPower {
  static sum (...elements) {
    // validator \/ \/ \/ \/
    if (elements.length < 2)
    return elements[0];
    else {
      for (let element of elements) {
        if (typeof element == 'string') {
          let countPoint = 0;
          for (let char of element) {
            if (/\d/.test(char));
            else if ('.' == char) countPoint++;
            else throw new Error(`The char ${char} is not a number`);
          }
          if (countPoint > 1)
          throw new Error(`There are more than two decimal points`);
        }
        else throw new Error(`The value "${element}" is not a string.`);
      }
    }
    // purifying iterator
    for (let index = 0; index < elements.length; index++) {
      let actual = elements[index],
      forReplace = '',
      isBreak = false;
      
      let unitPosition = 0;
      // for start
      for (let pos = 0; pos < actual.length; pos++) {
        if (actual[pos] == '0' && actual[pos+1] == '.') {
          forReplace = "0.";
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
      for (let pos = actual.length-1; pos >= 0 && isBreak; pos--) {
        if (actual[pos] == "0" && actual[pos-1] == ".")
        break;
        else if (actual[pos] == "0")
           continue;
        else {
          let fracts = [];
          for (; pos >= unitPosition; pos--)
          {
            fracts.push( actual[pos] );
            if (actual[pos] == '.')
              break;
          }
          forReplace += fracts.reverse().join('');
          break;
        }
      }
      elements[index] = forReplace;
      // Well done ^^^^^^^
    }
    // Hasta aquí los elementos son válidos y puros.
    console.log(elements);
  }
}
console.log( MathPower.sum("000000000000000400000", "00060008009.0030020000000", "003003.5000", "005600.007008000000000", "00000666.9000900000"));