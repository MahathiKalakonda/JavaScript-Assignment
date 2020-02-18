function isInDescending(list)
{
    for(let index = 1; index < list.length; index++)
    {
        if(list[index]>list[index-1])
            return false;
    }
    return true;
}

console.log(isInDescending([32,28,15,13,10,8]));