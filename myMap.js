function squareElement(element)
{
    return element * element;
}

function myMap(callBack, array)
{
    let mappedArray = [];
    for(let index = 0; index < array.length; index++)
    {
        mappedArray.push(callBack(array[index]));
    }
    return mappedArray;
}

squaredArray = myMap(squareElement, [10, 13, 27, 30, 32, 23]);
console.log(squaredArray);