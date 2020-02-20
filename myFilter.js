function isEven(element)
{
    return element%2 == 0;
}

function myFilter(callBack, array)
{
    let filteredArray = [];
    for(let index = 0; index < array.length; index++)
    {
        if(callBack(array[index]))
            filteredArray.push(array[index]);
    }
    return filteredArray;
}

evenArray = myFilter(isEven, [10, 13, 27, 30, 32, 23]);
console.log(evenArray);