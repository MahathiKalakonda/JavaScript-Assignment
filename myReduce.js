function sum(accumulator, element)
{
    return accumulator + element;
}

function myReduce(callBack, array, initialValue)
{
    if(initialValue)
        var [accumulator, startIndex, currentValue] = [initialValue, 0, array[0]];
    else
        var [accumulator, startIndex, currentValue] = [array[0], 1, array[1]];
    for(let currentIndex = startIndex; currentIndex < array.length; currentIndex++, currentValue = array[currentIndex])
        accumulator = callBack(accumulator, currentValue, currentIndex, array);
    return accumulator;
}

let total = myReduce(sum, [1,2,3,4], 5);
console.log(total);