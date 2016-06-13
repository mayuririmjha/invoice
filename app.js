//This is the app.js file where all the modules live

var app = angular.module("InvoiceApplication", []);

app.controller('ProductListController', function($scope, $http) {
  $http.get('data_set.json')
        .success(function(data) {
            $scope.products = data;
        })
        .error(function(data,status,error,config){
            $scope.products = [{heading:"Error",description:"Could not load json data"}];
        });

});