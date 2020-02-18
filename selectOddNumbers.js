function isOdd(number)
{
    returnValue = [false,true];
    return returnValue[number%2];
}

function selectingOddNumbers(elementsList)
{
    let oddNumbersList = [];
    for(let index = 0; index < elementsList.length; index++)
    {
        if(isOdd(elementsList[index]))
            oddNumbersList.push(elementsList[index]);
    }
    return oddNumbersList
}

function printOddNumbers()
{
    console.log("Odd numbers are :"+oddNumbers);
}

var oddNumbers = selectingOddNumbers([5,3,1,2,6,9,12,18,19]);
printOddNumbers();