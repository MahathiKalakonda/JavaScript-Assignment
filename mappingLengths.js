function computeLengthsArray(elements)
{
    let listOfLengths = []
    for(let index = 0; index < elements.length; index++)
    {
        listOfLengths.push(elements[index].length);
    }
    return listOfLengths;
}

function printLengthsOfElements()
{
    console.log("Array of lengths of elements is: " + lengthsList);
}

lengthsList = computeLengthsArray(["Mahathi", "Java", "Python", "Github", "Lengths"]);
printLengthsOfElements()