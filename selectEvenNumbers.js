function isEven(number)
{
    return number%2==0;
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
    console.log("Even Numbers are :"+evenNumbers);
}

array = [5, 3, 1, 2, 6, 9, 12, 18, 19];
var evenNumbers = selectingEvenNumbers(array);
printEvenNumbers();

var resultEvenNumbers = array.filter(number => number % 2 == 0);
console.log("Even numbers using filter are : " + resultEvenNumbers);