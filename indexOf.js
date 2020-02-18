function getPositionOf(list, keyElement)
{
    for(let index = 0; index < list.length; index++)
    {
        if(keyElement == list[index])
            return index;
    }
    return -1;
}

function printPosition()
{
    console.log("The index of the element in the list is : " + position);
}

var position = getPositionOf([10,19,13,12,9,13,24],13);
printPosition();