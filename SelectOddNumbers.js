function getListLength()
{
    var listLength = prompt("Please enter the length of the list", "");
}
function getListElements()
{
    var Elements
    console.log("Enter the elements");
    for(let index = 0; index<listLength; index++)
    {
        Elements[index]=prompt();
    }
}
function isOdd(number)
{
    returnValue = [false,true];
    return returnValue[number%2];
}
function selectingOddNumbers()
{
    var OddNumbers;
    for(let index = 0; index<listLength; index++)
    {
        if(isOdd(Elements[index]))
            OddNumbers.push(Elements[index]);
    }
}
function printOddNumbers()
{
    console.log("Odd Numbers are : "+OddNumbers);
}
getListLength()
getListElements()
selectingOddNumbers()
printOddNumbers()