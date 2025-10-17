
var num="12";var a=Number(num)
var c=(a%2==0)?"even":"odd"
console.log(c)


var day=7


switch(true)
{
    case day>=1 && day<=5:
        console.log("It's a weekday");
        break;
       
    case day>=6 && day<=7:
        console.log("It's a weekend");
        break;
       
    default:
        console.log("Invalid day");
        break;
}
