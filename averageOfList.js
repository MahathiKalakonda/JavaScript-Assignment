function addListElements(elements)
{
    let sum=0;
    for(let index=0; index < elements.length; index++)
    {
        sum = sum + elements[index];
    }
    return sum;
}

function computeAverage(elements)
{
    let sumOfElements = addListElements(elements)
    let average = sumOfElements / elements.length
    return average;
}

function printAverage()
{
    console.log("Average of elements in the list is: " + averageOfNumbers);
}

array = [5, 9, 10, 12, 13];
var averageOfNumbers = computeAverage(array);
printAverage();

var sumOfElements = array.reduce((accumulator, currentValue) => accumulator + currentValue);
var averageOfElements = sumOfElements / array.length;
console.log("Average of elements using reduce function is : " + averageOfElements);