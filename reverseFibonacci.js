function computeReverseFibonacci(fiboLength)
{
    let reverseFibo = [];
    reverseFibo[0] = 1, reverseFibo[1] = 0;
    let loopTurns = fiboLength - reverseFibo.length;
    for(let index = 0; index < loopTurns; index++)
    {
        reverseFibo.unshift(reverseFibo[0] + reverseFibo[1]);
    }
    return reverseFibo;
}

function printList()
{
    console.log("Fibonacci series in reverse order  is: " + reverseFibonacci);
}

let reverseFibonacci = computeReverseFibonacci(10);
printList();