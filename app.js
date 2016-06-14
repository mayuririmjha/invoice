(function(){
	var app = angular.module("InvoiceApplication", []);

	app.controller('CategoryController', function() {
		this.categoryVar = categoryTypes;
	});

	var categoryTypes = [
		{
			name: "Printer"
		},
		{
			name: "Monitor"
		},
		{
			name: "Scanner"
		},
	];
})();
