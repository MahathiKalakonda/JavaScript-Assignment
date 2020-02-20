function squareElement(element)
{
    return element * element;
}

function myMap(callBack, array)
{
    let mappedArray = [], currentValue = array[0];
    for(let currentIndex = 0; currentIndex < array.length; currentIndex++, currentValue = array[currentIndex])
    {
        mappedArray.push(callBack(currentValue, currentIndex, array));
    }
    return mappedArray;
}

squaredArray = myMap(squareElement, [10, 13, 27, 30, 32, 23]);
console.log(squaredArray);