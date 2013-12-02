/// <reference path="../../scripts/angular.js" />
var appWorship = angular.module('appWorship', []);
angular.module('appWorship').controller('latest', ['$scope', '$http', function ($scope, $http) {

    //if a IIS hosted project the js on the _layout.cshtml should get the root url, 
    //otherwise uncomment the line below and change to correct.

   //  baseurl = "http://localhost:61569";
  
    $http.get(baseurl + '/api/Test/getStuff').success(function (data) {
        console.log('getStuff: ' + data);
    }).error(function (data) {
        console.log(' error in getStuff: ' + data);
    });

    $http.get(baseurl + '/api/Test/getAuthorizedStuff').success(function (data) {
        //rather than a 401 this returns the loginpage (302 redirect)
        console.log('getAuthorizedStuff: ' + data);
    }).error(function (data) {
        console.log(' error in getAuthorizedStuff: ' + data);
    });

    $http.get(baseurl + '/api/Test/getcustomAuthorizedStuff').success(function (data) {
        //rather than a 401 this returns the loginpage (302 redirect)
        console.log('getcustomAuthorizedStuff: ' + data);
    }).error(function (data) {
        console.log(' error in getcustomAuthorizedStuff: ' + data);
    });

}]);

