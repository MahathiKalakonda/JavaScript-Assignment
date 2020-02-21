function isOdd(number)
{
    return number%2!=0;
}

function computeNumberOfOdds(elements)
{
    let numberOfOdds = 0;
    for(let index = 0; index < elements.length; index++)
    {
        if(isOdd(elements[index]))
            numberOfOdds++;
    }
    return numberOfOdds;
}

function printOddsCount()
{
    console.log("Number of odd numbers is: " + oddsCount);
}

array = [10, 12, 15, 201, 24, 12, 19, 29];
var oddsCount = computeNumberOfOdds(array);
printOddsCount();

var resultOddNumbers = array.filter(number => number % 2 != 0);
var resultantOddCount = resultOddNumbers.length
console.log("Number of odd numbers using filter is : " + resultantOddCount);