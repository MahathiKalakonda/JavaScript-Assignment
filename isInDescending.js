function isInDescending(list)
{
    for(let index = 1; index < list.length; index++)
    {
        if(list[index]>list[index-1])
            return false;
    }
    return true;
}

function isFirstGreater(currentValue, currentIndex, array)
{
    if(array[currentIndex + 1])
        return currentValue > array[currentIndex + 1];
    return true;
}

var array = [32, 28, 15, 13, 10, 8];
console.log(isInDescending(array));

var isListInDescending = array.every(isFirstGreater);
console.log("Using every method : " + isListInDescending);