/**
 * Created by Silen on 2017/7/9.
 */
(function(angular){
    var login=angular.module('blog_login',['ngRoute']);
    login.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/login',{
            templateUrl:'./login/login.html',
            controller:'loginCtrl'
        })
    }])
    login.controller('loginCtrl',['$scope','$window',function($scope,$window){
        $scope.loginClick=function(){
            $window.location='../Blog/index.html#/home';
        }
        $scope.signupclick=function(){
            $window.location='../Blog/index.html#/register';
        }
    }])
})(angular)