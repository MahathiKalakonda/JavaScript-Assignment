function selectAlternateElements(elements)
{
    let alternateElements=[]
    for(let index=0; index < elements.length; index+=2)
    {
        alternateElements.push(elements[index]);
    }
    return alternateElements;
}

function printList()
{
    console.log("Alternate elements of the list are : "+alternateElements);
}

function isIndexEven(currentValue, currentIndex)
{
    return currentIndex % 2 == 0;
}

array = [2, 15, 19, 2019, 25, 32, 15];
var alternateElements = selectAlternateElements(array);
printList();

var alternateNumbers = array.filter(isIndexEven);
console.log("Alternate numbers using filter are : " + alternateNumbers);