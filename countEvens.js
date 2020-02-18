function isEven(number)
{
    returnValue = [true,false];
    return returnValue[number%2];
}
function computeNumberOfEvens(elements)
{
    let numberOfEvens = 0;
    for(let index=0; index < elements.length; index++)
    {
        if(isEven(elements[index]))
            numberOfEvens++;
    }
    return numberOfEvens;
}
function printEvensCount()
{
    console.log("Number of even numbers is : " + evensCount);
}
var evensCount = computeNumberOfEvens([10,12,15,201,24,12,19,29,30]);
printEvensCount();