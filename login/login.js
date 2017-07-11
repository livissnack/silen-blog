/**
 * Created by Silen on 2017/7/9.
 */
(function(angular){
    var login=angular.module('blog_login',['ngRoute','blog_common']);
    login.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/login',{
            templateUrl:'./login/login.html',
            controller:'loginCtrl'
        })
    }])
    login.controller('loginCtrl',['$scope','$window','$navtab',function($scope,$window,$navtab){
        $scope.loginClick=function(){
            $window.location='./index.html#/home';
            $navtab.navtab();
        }
        $scope.signupclick=function(){
            $window.location='./index.html#/register';
            $navtab.navtab();
        }
    }])
})(angular)