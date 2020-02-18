function isEven(number)
{
    returnValue = [true,false];
    return returnValue[number%2];
}
function selectingEvenNumbers(elementsList)
{
    let evenNumbersList = [];
    for(let index = 0; index < elementsList.length; index++)
    {
        if(isEven(elementsList[index]))
            evenNumbersList.push(elementsList[index]);
    }
    return evenNumbersList
}
function printEvenNumbers()
{
    console.log("Even Numbers are : "+evenNumbers);
}
var evenNumbers = selectingEvenNumbers([5,3,1,2,6,9,12,18,19])
printEvenNumbers()