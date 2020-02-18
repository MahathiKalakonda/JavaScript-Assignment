function getDigits(number)
{
    let digits = [], decimal=10;
    while(number>0)
    {
        digits.unshift(number%decimal);
        number=Math.floor(number/decimal);
    }
    return digits;
}

function printDigits()
{
    console.log("The digits in the given number are : " + digits);
}

var digits = getDigits(509241);
printDigits();