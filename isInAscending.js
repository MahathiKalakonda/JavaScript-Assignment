function isInAscending(list)
{
    for(let index = 1; index < list.length; index++)
    {
        if(list[index]<list[index-1])
            return false;
    }
    return true;
}

function isFirstLesser(currentValue, currentIndex, array)
{
    if(array[currentIndex + 1])
        return currentValue < array[currentIndex + 1];
    return true;
}

array = [3, 10, 15, 19, 25, 32];
console.log(isInAscending(array));

var isListInAscending = array.every(isFirstLesser);
console.log("Using every method : " + isListInAscending);