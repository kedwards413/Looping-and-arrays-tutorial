function sumTheElements(theArray){
	
	var total = 0;
	
	for(let index = 0; index < theArray.length; index++){
        total+=theArray[index]
    }

	return total;
}
var myArray = [23, 50]
console.log(sumTheElements(myArray));
console.log(sumTheElements([2,13,34,5]))
console.log(sumTheElements([10,500,29,30, 100]))
console.log(sumTheElements(25));