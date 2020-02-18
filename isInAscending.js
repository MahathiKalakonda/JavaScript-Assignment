function isInAscending(list)
{
    for(let index = 1; index < list.length; index++)
    {
        if(list[index]<list[index-1])
            return false;
    }
    return true;
}

console.log(isInAscending([3,10,15,19,25,32]));