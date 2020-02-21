function isEven(number)
{
    return number%2==0;
}

function computeNumberOfEvens(elements)
{
    let numberOfEvens = 0;
    for(let index = 0; index < elements.length; index++)
    {
        if(isEven(elements[index]))
            numberOfEvens++;
    }
    return numberOfEvens;
}

function printEvensCount()
{
    console.log("Number of even numbers is: " + evensCount);
}

array = [10, 12, 15, 201, 24, 12, 19, 29, 30];
var evensCount = computeNumberOfEvens(array);
printEvensCount();

var resultEvenNumbers = array.filter(number => number % 2 == 0);
var resultantEvenCount = resultEvenNumbers.length
console.log("Number of even numbers using filter is : " + resultantEvenCount);