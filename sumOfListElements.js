function addingListElements(elements)
{
    let sum=0;
    for(let index=0; index < elements.length; index++)
    {
        sum = sum + elements[index];
    }
    return sum;
}

function printSum()
{
    console.log("Sum of elements in the list is: "+sumOfNumbers);
}

var array = [5, 9, 10, 12];
var sumOfNumbers = addingListElements(array);
printSum();

var sumOfElements = array.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log("sum of elements with reduce function is : "+ sumOfElements);