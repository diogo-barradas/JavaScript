// mudar background 
        var r = randomIntFromInterval(0,255);
        var g = randomIntFromInterval(0,255);
        var b = randomIntFromInterval(0,255);
        var backColor = "rgb(" + r + "," + g + "," + b + ")";

// compoe o valor para uma cor no formato RGB
function getRGBColor(red, green, blue)
{
        return "rgb("+ red + "," + green + "," + blue +")";
}

// gera uma cor RGB de forma aleatoria 
function getRandomRGBColor()
{
        var r = randomIntFromInterval(0,255);
        var g = randomIntFromInterval(0,255);
        var b = randomIntFromInterval(0,255);

        return getRGBColor(r,g,b);
}
