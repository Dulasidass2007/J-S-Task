
let num="12";
let a=Number(num);
let c=(a%2==0)?"even":"odd";
console.log(c);


let day=7

;
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
}
