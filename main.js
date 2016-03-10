function RunrPrinting(){
	var printer = require('printer'),
    	util = require('util');
	return {
		getPrinterList: function(res, query){
			res.setHeader('Content-Type', 'application/json');
			res.end( JSON.stringify(printer.getPrinters()) );
		}
	};
};
module.exports = RunrPrinting.call(this);
