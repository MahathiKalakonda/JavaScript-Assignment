function getReverseArray(elements)
{
    let reversedList = [];
    for(let index = 0; index < elements.length; index++)
    {
        reversedList.unshift(elements[index]);
    }
    return reversedList;
}

function printReverseList()
{
    console.log("The reversed array is : " + reverseList)
}

var reverseList = getReverseArray([90,12,19,2,34,91,10]);
printReverseList();