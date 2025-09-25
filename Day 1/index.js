let num = "90";
let a = Number(num);
switch(true)
{
    case a>=90 && a<=100:
        console.log("Grade A");
        break;
    case a>=75 && a<=89:
        console.log("Grade B");
        break;
    case a>=50 && a<=74:
        console.log("Grade C");
        break;
    default:
        console.log("Fail");
}
console.log(num)