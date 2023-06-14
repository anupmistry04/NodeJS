let data={
	"id": "0001",
	"type": "donut",
	"name": "Cake",
	"ppu": 0.55,
	"batters": {
		"batter": [
			{
				"id": "1001",
				"type": "Regular"
			},
			{
				"id": "1002",
				"type": "Chocolate"
			},
			{
				"id": "1003",
				"type": "Blueberry"
			},
			{
				"id": "1004",
				"type": "Devil's Food"
			}
		]
	},
	"topping": [
		{
			"id": "5001",
			"type": "None"
		},
		{
			"id": "5002",
			"type": "Glazed"
		},
		{
			"id": "5005",
			"type": "Sugar"
		},
		{
			"id": "5007",
			"type": "Powdered Sugar"
		},
		{
			"id": "5006",
			"type": "Chocolate with Sprinkles"
		},
		{
			"id": "5003",
			"type": "Chocolate"
		},
		{
			"id": "5004",
			"type": "Maple"
		}
	]
}

//Prepare a cake with Chocolate Batter  and with topping Chocolate with Sprinkles.
//cake, batter, toping id and type
//object of object 

//////////////////////////data from same file/////////////////////
// let cake_id = data.id;
// let cake_type=data.type;
// let batter_id=data.batters.batter[1].id;
// let batter_type=data.batters.batter[1].type;
// let topping_id =data.topping[4].id;
// let topping_type =data.topping[4].type;

// console.log(cake_id +"-"+ cake_type);
// console.log(batter_id +"-"+ batter_type);
// console.log(topping_id +"-"+ topping_type);

//////////////data from cake.json file/////////////////////////

let data1=require('./cake');

let cake_id = data1.id;
let cake_type=data1.type;
let batter_id=data1.batters.batter[1].id;
let batter_type=data1.batters.batter[1].type;
let topping_id =data1.topping[4].id;
let topping_type =data1.topping[4].type;

console.log(cake_id +"-"+ cake_type);
console.log(batter_id +"-"+ batter_type);
console.log(topping_id +"-"+ topping_type);




