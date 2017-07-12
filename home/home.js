/**
 * Created by Silen on 2017/7/8.
 */
(function (angular) {
    var home = angular.module('blog_home', ['blog_common', 'ngRoute']);
    home.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: './home/home.html',
            controller: 'homeCtrl'
        }).when('/', {
            redirectTo: '/home'
        })
    }])
    home.controller('homeCtrl', ['$scope','$http','$window','$navtab',function ($scope,$http,$window,$navtab) {
        $scope.register=function(){
            $window.location='../../index.html#/register'
        }
        $http({
            url:'./dist/datas/homedatas.json',
            method:'get'
        }).then(function(response){
            $scope.result=response.data;
            $scope.$applyAsync();
        })
    }])
})(angular)