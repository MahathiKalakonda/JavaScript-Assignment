function printReverse(elements)
{
    console.log("List in reverse order is :");
    for(let index=elements.length-1; index >= 0; index--)
    {
        console.log(elements[index]);
    }
}
printReverse([5,'Mahathi',91,2016,2020]);