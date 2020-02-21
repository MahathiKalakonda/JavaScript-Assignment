function isOdd(number)
{
    return number%2!=0;
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

array = [5, 3, 1, 2, 6, 9, 12, 18, 19];
var oddNumbers = selectingOddNumbers(array);
printOddNumbers();

var resultOddNumbers = array.filter(number => number % 2 != 0);
console.log("Odd numbers using filter are : " + resultOddNumbers);