/// <reference path="../../scripts/angular.js" />
var appWorship = angular.module('appWorship', []);
angular.module('appWorship').controller('latest', ['$scope', '$http', function ($scope, $http) {

    //if a IIS hosted project the js on the _layout.cshtml should get the root url, 
    //if you comment out the line below.

     baseurl = "http://localhost:61569";
  
    $http.get(baseurl + '/api/Test/getStuff',
        {
            headers: { 'X-Requested-With': 'XMLHttpRequest' }
        }).success(function (data, status, headers, config) {
        console.log('getStuff: ' + data);
    }).error(function (data, status, headers, config) {
        console.log(' error in getStuff: ' + data);
    });

    $http.get(baseurl + '/api/Test/getAuthorizedStuff',
        {
            headers: { 'X-Requested-With': 'XMLHttpRequest' }
        }).success(function (data, status, headers, config) {
        //rather than a 401 this returns the loginpage (302 redirect)
        console.log('getAuthorizedStuff: ' + data);
    }).error(function (data, status, headers, config) {
        console.log(' error in getAuthorizedStuff: ' + data);
    });

    $http.get(baseurl + '/api/Test/getcustomAuthorizedStuff',
        {
            headers: { 'X-Requested-With': 'XMLHttpRequest' }
        }).success(function (data, status, headers, config) {
        //rather than a 401 this returns the loginpage (302 redirect)
        console.log('getcustomAuthorizedStuff: ' + data);
    }).error(function (data, status, headers, config) {
        console.log(' error in getcustomAuthorizedStuff: ' + data);
    });

}]);

