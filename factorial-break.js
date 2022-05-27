//Calcular el factoria usando un bucle while, una bifuracondicional y una sentencia breaK
 let num = 10;
    let factorial = 1;
    let i = 1;
    while(i<=num){
        
            factorial = factorial * i;
        if(i==num){

            break;
        }
        i++;
    }
    console.log(factorial);