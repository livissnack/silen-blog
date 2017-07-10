/**
 * Created by Silen on 2017/7/9.
 */
(function(angular){
    var register=angular.module('blog_register',['ngRoute']);
    register.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/register',{
            templateUrl:'./register/register.html',
            controller:'registerCtrl'
        })
    }])
    register.controller('registerCtrl',['$scope','$window',function($scope,$window){
        $scope.registClick=function(){
            $window.location='../Blog/index.html#/home';
        }
        $scope.signinclick=function(){
            $window.location='../Blog/index.html#/login';
        }
    }])
})(angular)