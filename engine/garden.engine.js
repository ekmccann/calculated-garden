const GardenData = require('./garden.data.js');
const _ = require('lodash');
/* 
Take the name of a single vegetable as an input
Look at the garden.data file and find the object with the vegetable name
If none exists return an error (no vegetable by that name)
Take the 'pairings' key from the correct vegetable object and return the array 
Output the values in the array
*/
/* Take a list of vegetables as an input
Look at the garden data file and find the objects with the vegetable names
Take the pairings key from the first vegetable object and return the array
Repeat 
Output values*/

const GardenEngine = {
	bestPartner : (vegetable)=>{
		const foundVegetable =_.find(GardenData, (data, name) => {
			return vegetable == name
		})

		//console.log(foundVegetable.pairings);

		return foundVegetable.pairings; 
	},

	multiInput : (vegetableList)=>{
		const repeatVegetable =_.map(vegetableList, (name) =>{
			return GardenEngine.bestPartner(name);
		})

		return _.uniq(_.flatten(repeatVegetable))
	}

}

module.exports = GardenEngine;