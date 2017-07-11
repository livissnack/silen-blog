/**
 * Created by Silen on 2017/7/10.
 */
(function(angular){
    var python =angular.module('blog_python',['ngRoute']);
    python.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/python',{
            templateUrl:'./python/python.html',
        })
    }])
})(angular)