//your JS code here. If required.
function Print(n){
	if(n%3===0 && n%5!=0){
		alert("Fizz");
	}
	else if(n%3!==0 && n%5===0){
		alert("Buzz");
	}
	else if(n%3===0 && n%5===0){
		alert("FizzBuzz");
	}
}