var arrayOfCelsiusValues = [-2,34,56,-10];

var arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value){
	let convertedTemp = value*1.8+32;
    //add your code here and return the new value
    return convertedTemp;
	
});


console.log(arrayOfFahrenheitValues);