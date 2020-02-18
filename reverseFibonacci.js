function computeReverseFibonacci(fiboLength)
{
    let reverseFibo = [], loopTurns = fiboLength - reverseFibo.length;;
    reverseFibo[0] = 1, reverseFibo[1] = 0;
    for(let index = 0; index < loopTurns; index++)
    {

        let newElement = reverseFibo[0] + reverseFibo[1];
        reverseFibo.unshift(newElement);
    }
    return reverseFibo;
}

function printList()
{
    console.log("Fibonacci series in reverse order  is: " + reverseFibonacci);
}

let reverseFibonacci = computeReverseFibonacci(10);
printList();