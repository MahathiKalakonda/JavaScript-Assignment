function isAboveThreshold(element, threshold)
{
    if(element > threshold)
        return true;
    return false;
}

function getAboveThresholdCount(elements, threshold)
{
    let countAboveThreshold = 0;
    for(let index = 0; index < elements.length; index++)
    {
        if(isAboveThreshold(elements[index], threshold))
            countAboveThreshold++;
    }
    return countAboveThreshold;
}

function printCount()
{
    console.log("Number of elements above threshold is: " + aboveThresholdCount);
}

array = [10, 5, 24, 32, 19, 8, 29];
var aboveThresholdCount = getAboveThresholdCount(array, 11);
printCount();

var elementsAboveThreshold = array.filter(number => number > 11);
var resultAboveCount = elementsAboveThreshold.length;
console.log("Number of elements above threshold using filter is : " + resultAboveCount);