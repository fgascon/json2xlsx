var xlsx = require('node-xlsx');

module.exports = function convert(jsonData, sheetName){
	var data = JSON.parse(jsonData);
	var formattedData = data.map(function(item){
		return Object.keys(item).map(function(key){
			return item[key];
		});
	});
	return xlsx.build([{
		name: sheetName||"data",
		data: formattedData
	}]);
};
