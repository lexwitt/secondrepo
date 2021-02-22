var containerEle = document.body.querySelector(".container");

var num1=Number(prompt("What is your bill?"));

var sum=((num1)+((num1)*.07))+(((num1)+((num1)*.07))*.05);

sum=Math.ceil(sum);

containerEle.innerHTML=sum;

document.body.querySelector(".container").innerHTML=" Your final bill is " +sum;