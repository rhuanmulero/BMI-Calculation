/* informação */
const peso = 70;
const altura = 1.63;

/* fórmula */

const imc = (peso / Math.pow(altura, 2))
console.log(imc)

/* código */
if (imc < 18.5) {

console.log('ABAIXO DA MÉDIA')}
    else if (imc > 18.5 && imc < 25)  {

        console.log('PESO NORMAL')
        } else if (imc > 25 && imc <30) {

                console.log ('ACIMA DO PESO')
            } else if (imc > 30 && imc < 40) {

                    console.log ('OBESO')
                } else {

                        console.log ('OBESIDADE GRAVE')

                         }