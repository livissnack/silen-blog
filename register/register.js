/**
 * Created by Silen on 2017/7/9.
 */
(function(angular){
    var register=angular.module('blog_register',['ngRoute','blog_common']);
    register.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/register',{
            templateUrl:'./register/register.html',
            controller:'registerCtrl'
        })
    }])
    register.controller('registerCtrl',['$scope','$window','$navtab',function($scope,$window,$navtab){
        $scope.registClick=function(){
            $window.location='./index.html#/home';
            $navtab.navtab();
        }
        $scope.signinclick=function(){
            $window.location='./index.html#/login';
            $navtab.navtab();
        }
    }])
})(angular)