//basic js
let data = [{name: 'John'}, {name: 'Mary'}, {name: 'Joe'}, {name: 'Ben'}];
console.log("data.length", data.length);

//The map() method creates a NEW ARRAY with the results of calling a function for every array element.
//The map() method calls the provided function once for each element in an array, in order.

//JS
function getNamesJS() {
	return data.map(function(item){
		return item.name
	});
}

console.log("getNamesJS", getNamesJS());


//lodash
function getNames(){
	return _.map(data, function(item){
		return item.name
	});
}
console.log("getNames", getNames());

///////use of filter
//JS
function getJohnJS(){
	let result =  data.filter((obj) => {
		return (obj["name"] == 'John');
	}).length;
	return result;
}

console.log("getJohn", getJohnJS());


//lodash
// .filter returning an array of all elements predicate returns truthy for.
function getJohn(){
	let result = _.filter(data, (obj) => {
                return (obj["name"] == 'John');
            }).length;
		return result;
}

console.log("getJohn", getJohn());


// //lodash filter 
let users = [
		  { 'user': 'barney', 'age': 36, 'active': true },
		  { 'user': 'fred',   'age': 40, 'active': false },
		  { 'user': 'wilma',   'age': 22, 'active': false }
		];

//Iterates over elements of collection, returning an array of all elements predicate returns truthy for.
let notActive = _.filter(users, (obj) => {
	if (!obj.active){
		console.log("NOT", obj.user);
	}
	return !obj.active; 
});

console.log("notActive", notActive);




// //lodash
// //_groupby 
// //Creates an object composed of keys generated from the results of running each element
// //The corresponding value of each key is an array of elements responsible for generating the key.

// // group by age based on 10's
let peopleData = [{name: 'John Smith', age: 54},
				 {name: 'Mary Smith', age: 42},
				 {name: 'Peter Pan', age: 15},
				 {name: 'Kelly Fan', age: 35},
				 {name: 'Adam Potts', age: 42},
				 {name: 'Joe Johnson', age: 46},
				 {name: 'Ben Smith', age: 35}];

function getAgeGroups(){
	let result = _.groupBy(peopleData, (obj) => {
        return Math.floor(obj.age / 10);   
    })
	return result;
}

console.log("getAgeGroups", getAgeGroups());


// //lodash
// //sort the groups and then how many in each
// //Creates an array of values by running each element in collection thru iteratee. 
// //The iteratee is invoked with three arguments:
// //(value, index|key, collection).

function howManyAgeGroup(){
	let groups = _.groupBy(peopleData, (obj) => {
    	return Math.floor(obj.age / 10);   
	});

	let result = _.mapValues(groups, (value) => {
    	console.log("value is:", value);
    	return value.length;
	});

	return result

}

console.log("howManyAgeGroup", howManyAgeGroup());




// ////////////////////////////
// //.includes Checks if value is in collection. 
// //If collection is a string, it's checked for a substring of value, otherwise SameValueZero is used for equality comparisons.

let gradeArray = [56, 88, 98, 78, 100];
console.log("Any perfect scores?", _.includes(gradeArray, 100));

let studentGrades = [{"name": "Alice", "grade": 56},
					{"name": "Tom:", "grade": 88},
					{"name": "Jerry", "grade": 98},
					{"name": "Tweety", "grade": 78},
					{"name": "Mickey", "grade": 100}];


//use forEach to get key of person
let checkScore = _.forEach(studentGrades, (item, key) => {
	console.log("if statement", item.grade);
	if (_.includes(item, 100)){
		console.log("Congratulations:", studentGrades[key].name);

	}
});

console.log("Who has the perfect score?", checkScore);

let randomNumber1 = _.random(5);
let randomNumber2 = _.random(5,10);

console.log("randomNumbers", randomNumber1, randomNumber2);


//Lodash use of map, chunk, includes, forEach

let pizzaToppingPrices = [{name: 'Onions', price: .54},
						 {name: 'Green Peppers', price: .42},
						 {name: 'Pepperoni', price: 1.50},
						 {name: 'Bacon', price: 1.35},
						 {name: 'Mushrooms', price: .85},
						 {name: 'Meatball', price: 1.46},
						 {name: 'Steak', price: 2.05},
						 {name: 'Shrimp', price: 2.25}];


//Generic display: show all toppings in 3 columns

let chunkArray = _.chunk(pizzaToppingPrices, 3);
console.log("chunkArray", chunkArray);
chunkArray.forEach((item) => {
	console.log("******************");
	item.forEach((topping) => {
		console.log("topping:", topping.name);
	})
});

/*
Sort pizza toppings by price:
less than 1 dollar,
1-2 dollar,
more than 2 dollar.


Get the average price for each group.
Display each group in column with the average price at the top, like a menu.
*/

function getPriceGroups(){
	let result = _.groupBy(pizzaToppingPrices, (item) => {
		//this will return based on item passes in and value
        return Math.floor(item.price / 1.0)    
    })
	return result;
}

console.log("getPriceGroups", getPriceGroups());



//some specialty pizzas need a mint. If a speicalty pizza contains onion or galic, add a mint to the order.

let pizzaSpecials = [{name: "Veggie Lux", crust: "thin", toppings: "Onions, Green Peppers, Mushrooms"},
					{name: "Meat Lovers", crust: "thick", toppings: "Pepperoni, Bacon, Meatball, Steak"},
					{name: "Taco Toppings", crust: "thick", toppings: "Beef, Cheddar, Sour Cream"},
					{name: "Chicken Little", crust: "thick", toppings: ["Chicken", "Cheese", "Garlic", "Spinach"]}
					];


console.log("YEAH");
let needMints = _.forEach(pizzaSpecials, (item, key) => {
	if (_.includes(item.toppings, "Onions") || _.includes(item.toppings, "Garlic")){
		console.log("Add a mint to pizza:", pizzaSpecials[key].name);
	};
})

//Convert the toppings to an array

let toppingsArray = _.forEach(pizzaToppingPrices, (item) => {
	_.toArray(item.name);
})

console.log("toppingsArray", toppingsArray);




