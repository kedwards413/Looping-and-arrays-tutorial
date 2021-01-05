let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let simplifier = function(person){
    let currentDate = new Date ();
    let age = currentDate.getFullYear() - person.birthDate.getFullYear();
    let month = currentDate.getMonth() - person.birthDate.getMonth();
        if (month < 0 || (month === 0 && currentDate.getDate() < person.birthDate.getDate())){
            age = age - 1;
        }
        return ("Hello, my name is " + person.name + " and I am " + age + " years old")
};
let newArray = people.map(simplifier);

console.log(newArray);