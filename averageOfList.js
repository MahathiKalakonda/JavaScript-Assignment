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
    console.log("Average of elements in the list is : " + averageOfNumbers);
}

var averageOfNumbers = computeAverage([5,9,10,12,13]);
printAverage();