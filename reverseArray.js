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
    console.log("The reversed array is: " + reverseList);
}

var array = [90, 12, 19, 2, 34, 91, 10];
var reverseList = getReverseArray(array);
printReverseList();

var reverseArray = array.map(function (element, currentIndex, array)
{
    let index = array.length - currentIndex - 1;
    return array[index];
})
console.log("The reversed list using map is : " + reverseArray);