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
        minimumNumber = getMinimumOf2(minimumNumber, elements[index]);
    }
    return minimumNumber;
}

function printMinimum()
{
    console.log("Minimum element is: " + minimumOfList);
}

var minimumOfList = getMinimumElement([2,10,202,19,25,36]);
printMinimum()