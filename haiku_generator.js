var haiku = require('./haiku.js');
var sylTable = haiku.sylTable;

createHaiku([[2,3],[1,3,3],[3,2]]);

function createHaiku(structure) {
	var arrOfWords;
	var output = structure.map(function(lines) {
		if (Object.prototype.toString.call(lines) === '[object Array]') {
			return lines.map(randomizer).join(' ');
		} else {
			return randomizer(lines);
		}
	}).join('\n');
	function randomizer(syls) {
		arrOfWords = sylTable[syls];
		return arrOfWords[Math.floor(Math.random()*arrOfWords.length)];
	}
	console.log(output);
}