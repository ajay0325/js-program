var a = parseInt(prompt("enter the value of a"));
var b = parseInt(prompt("enter the value of b"));
var c = prompt("operator");
if (c=='+') {
    console.log("add: "+(a+b));
}
else if (c=='-') {
    console.log("sub: "+(a-b)); 
}
else if (c=='*') {
    console.log("multiple: "+(a*b));
}
else if (c=='/') {
    console.log("div: "+(a/b));
}
else{
    console.log("invalid operator");
}