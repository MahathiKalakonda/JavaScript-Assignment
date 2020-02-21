function getMaximum(number1,number2)
{
    if(number1 > number2)
        return number1;
    return number2;
}

function getMaximumElement(elements)
{
    let maximumNumber = elements[0];
    for(let index = 1; index < elements.length; index++)
    {
        maximumNumber = getMaximum(maximumNumber, elements[index]);
    }
    return maximumNumber;
}

function printMaximum()
{
    console.log("Maximum element is: " + maximumOfList);
}

array = [2, 10, 202, 19, 25, 36];
var maximumOfList = getMaximumElement(array);
printMaximum();

var maximumOfArray = array.reduce((accumulator,currentValue)=> accumulator > currentValue ? accumulator : currentValue);
console.log("Maximum of list using reduce function is : " + maximumOfArray);