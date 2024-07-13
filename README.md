# The MathPower

*Spanish:*   
Cuando ejecuté el siquiente código javascript:

*English:*   
When I ran the following javascript
code:
```javascript
  console.log( 0.008 + 0.001 ); 
  // the result is: 0.009000000000000001
```
*Spanish:*   
Esto no me gusto, me hizo sentir que
el entorno *JavaScript* no era confiable
matemáticamente, pero como soy matemático
me propuse a construir una clase llamada
**MathPower** que ofrece la capacidad de
trabajar con números reales de forma mas
presisa y terminar con esa decadencia de presición.

*English:*   
I didn't like this, it made me feel that *JavaScript* environment was not reliable mathematically, but since I am a mathematician I decided to build a class called **MathPower** that offers the ability to work with real numbers more Precise and put an end to that decline in precision.

## 0.008 + 0.001

```javascript
import MathPower from 'general-mathpower';

// Now
console.log(0.008 + 0.001);
// the result is: 0.009000000000000001

console.log( MathPower.sum("0.008", "0.001") );
// the result is: 0.009 <correct!>
```

*Spanish:*   
Todo está listo en el paquete, en esta
versión solo es soportado la adición,
las demás operaciones estarán disponibles
próximamente.

*English:*   
Everything is ready in the package, in this version only addition is supported, the other operations will be available soon.