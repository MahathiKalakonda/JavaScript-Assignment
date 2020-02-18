function isOdd(number)
{
    returnValue = [false,true];
    return returnValue[number%2];
}
function computeNumberOfOdds(elements)
{
    let numberOfOdds = 0;
    for(let index=0; index < elements.length; index++)
    {
        if(isOdd(elements[index]))
            numberOfOdds++;
    }
    return numberOfOdds;
}
function printOddsCount()
{
    console.log("Number of odd numbers is : " + oddsCount);
}
var oddsCount = computeNumberOfOdds([10,12,15,201,24,12,19,29]);
printOddsCount();