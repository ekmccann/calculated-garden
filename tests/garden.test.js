const GardenEngine = require('../engine/garden.engine.js');


const result = GardenEngine([
	'cucumber',
	'mocha'
])

console.log('----------\n result ->', result)
