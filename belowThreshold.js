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

var belowThresholdCount = getBelowThresholdCount([10,5,24,32,19,8,29],11);
printCount();