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
    console.log("Number of elemets above threshold is: " + aboveThresholdCount)
}

var aboveThresholdCount = getAboveThresholdCount([10,5,24,32,19,8,29],11);
printCount();