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

array = ["Mahathi", "Java", "Python", "Github", "Lengths"]
lengthsList = computeLengthsArray(array);
printLengthsOfElements()

var elementsLengths = array.map(element => element.length);
console.log("Array of lengths of elements using map function  is : " + elementsLengths);