function computeReverseFibonacci(fiboLength)
{
    let fiboSeries = [1,0],loopTurns = fiboLength - fiboSeries.length;
    for(let index = 0; index < loopTurns; index++)
    {

        let newElement = fiboSeries[0] + fiboSeries[1];
        fiboSeries.unshift(newElement);
    }
    return fiboSeries;
}
function printList()
{
    console.log("Fibonacci series in reverse order  is : " + reverseFibonacci);
}
var reverseFibonacci = computeReverseFibonacci(10);
printList();