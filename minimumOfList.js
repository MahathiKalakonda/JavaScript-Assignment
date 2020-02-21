function getMinimum(number1,number2)
{
    if(number1 < number2)
        return number1;
    return number2;
}

function getMinimumElement(elements)
{
    let minimumNumber = elements[0];
    for(let index = 1; index < elements.length; index++)
    {
        minimumNumber = getMinimum(minimumNumber, elements[index]);
    }
    return minimumNumber;
}

function printMinimum()
{
    console.log("Minimum element is: " + minimumOfList);
}

array = [2, 10, 202, 19, 25, 36];
var minimumOfList = getMinimumElement(array);
printMinimum();

var minimumOfArray = array.reduce((accumulator,currentValue)=> accumulator < currentValue ? accumulator : currentValue);
console.log("Minimum of list using reduce function is : " + minimumOfArray);