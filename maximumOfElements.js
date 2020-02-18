function getMaximumOf2(number1,number2)
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
        maximumNumber = getMaximumOf2(maximumNumber, elements[index]);
    }
    return maximumNumber;
}
function printMaximum()
{
    console.log("Maximum element is : " + maximumOfList);
}
var maximumOfList = getMaximumElement([2,10,'abc',15,202,30]);
printMaximum()