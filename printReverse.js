function printReverse(elements)
{
    console.log("List in reverse order is :");
    for(let index=elements.length-1; index >= 0; index--)
    {
        console.log(elements[index]);
    }
}

function printReverseArray(currentValue, currentIndex, array)
{
    let index = array.length - currentIndex - 1;
    console.log(array[index]);
}

array = [5, 'Mahathi', 91, 2016, 2020];
printReverse(array);
console.log("List in reverse order using map function is : ")
array.map(printReverseArray);