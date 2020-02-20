function isEven(element)
{
    return element % 2 == 0;
}

function myFilter(callBack, array)
{
    let filteredArray = [], currentValue = array[0];
    for(let currentIndex = 0; currentIndex < array.length; currentIndex++, currentValue = array[currentIndex])
    {
        if(callBack(currentValue, currentIndex, array))
            filteredArray.push(currentValue);
    }
    return filteredArray;
}

evenArray = myFilter(isEven, [10, 13, 27, 30, 32, 23]);
console.log(evenArray);
