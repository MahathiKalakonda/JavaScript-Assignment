function isOdd(number)
{
    returnValue = [false,true];
    return returnValue[number%2];
}
function selectingOddNumbers()
{
    for(let index = 0; index<oddNumbers.length; index++)
    {
        if(!isOdd(oddNumbers[index]))
            oddNumbers.splice(index,1);
    }
}
function printOddNumbers()
{
    console.log("Odd Numbers are : "+oddNumbers);
}
var oddNumbers = [5,3,1,2,6,9,12,18,19];
selectingOddNumbers(oddNumbers);
printOddNumbers()