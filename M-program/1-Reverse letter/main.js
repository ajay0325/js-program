var abc;
var num;
function ajay(num) {
    if (num==0) {
     abc = "Zero"; 
    }
    else if (num==1) {
        abc = "One";
    }
    else if (num==2) {
        abc = "Two";
    }
    else if (num==3) {
        abc = "Three";
    }
    else if (num==4) {
        abc = "Four";
    }
    else if (num==5) {
        abc = "Five";
    }
    else if (num==6) {
        abc = "Six";
    }
    else if (num==7) {
        abc = "Seven";
    }
    else if (num==8) {
        abc = "Eight";
    }
    else if (num==9) {
        abc = "Nine";
    }
    return abc;
}

var numb = prompt("enter the number");
var a;
let l = numb.length;

while (l!=0) {
    rem = numb%10;
    a = ajay(rem);
    b=a;
    numb = (numb-rem)/10;
    l--
    console.log(b);
}


