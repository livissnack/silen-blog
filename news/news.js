/**
 * Created by Silen on 2017/7/10.
 */
(function(angular){
    var news =angular.module('blog_news',['ngRoute']);
    news.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/news',{
            templateUrl:'./news/news.html',
        })
    }])
})(angular)