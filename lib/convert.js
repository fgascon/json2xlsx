var xlsx = require('node-xlsx');

module.exports = function convert(jsonData){
	var data = JSON.parse(jsonData);
	var formattedData = data.map(function(item){
		return Object.keys(item).map(function(key){
			return item[key];
		});
	});
	return xlsx.build([{
		name: "data",
		data: formattedData
	}]);
};
