function isOdd(number)
{
    returnValue = [false,true];
    return returnValue[number%2];
}
function selectingOddNumbers(elementsList)
{
    for(let index = 0; index<elementsList.length; index++)
    {
        if(isOdd(elementsList[index]))
            OddNumbers.splice(index,1);
    }
}
function printOddNumbers()
{
    console.log("Odd Numbers are : "+OddNumbers);
}
var OddNumbers = selectingOddNumbers([5,3,1,2,6,9,12,18,19])
printOddNumbers()