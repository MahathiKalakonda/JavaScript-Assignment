function isBelowThreshold(element, threshold)
{
    if(element < threshold)
        return true;
    return false;
}

function getBelowThresholdCount(elements, threshold)
{
    let countBelowThreshold = 0;
    for(let index = 0; index < elements.length; index++)
    {
        if(isBelowThreshold(elements[index], threshold))
            countBelowThreshold++;
    }
    return countBelowThreshold;
}

function printCount()
{
    console.log("Number of elemets below threshold is: " + belowThresholdCount)
}

array = [10, 5, 24, 32, 19, 8, 29];
var belowThresholdCount = getBelowThresholdCount(array, 11);
printCount();

var elementsBelowThreshold = array.filter(number => number < 11);
var resultBelowCount = elementsBelowThreshold.length;
console.log("Number of elements below threshold using filter is : " + resultBelowCount);