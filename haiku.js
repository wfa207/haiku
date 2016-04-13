var fs = require('fs');
var cmudictFile = readCmudictFile(process.argv[2]); // './cmudict.txt' is the filename

function readCmudictFile(file) {
	return fs.readFileSync(file).toString();
}

function formatData(data) {
	var lines = data.toString().split('\n'),
		sylTable = {},
		lineSplit, word, phoneme, sylMatch, syls;
	lines.forEach(function(line) {
		lineSplit = line.split('  ');
		word = lineSplit[0];
		phoneme = lineSplit[1];
		sylMatch = phoneme !== undefined ? phoneme.match(/[\d]+/g) : false;
		if (sylMatch) {
			syls = sylMatch.length
			if (sylTable[syls] === undefined) {
				sylTable[syls] = [];
			}
			sylTable[syls].push(word.replace(/\([\d]+\)/gi,''));
		}
	});
	return sylTable;
}

module.exports = {
	readCmudictFile: readCmudictFile,
	formatData: formatData,
	sylTable: formatData(cmudictFile),
};