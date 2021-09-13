const storage = require('../storage/db.js');

class MapGameService {

	constructor() {

	}

	async placeElement(element) {
		let st = new storage('mapGameCells');	
		await st.add({ x: element.x, y: element.y, type: element.type }, 'map1'); 
	}

	async getElements() {
		let st = new storage('mapGameCells');
		return await st.get('map1');
	}

}

module.exports = MapGameService;
