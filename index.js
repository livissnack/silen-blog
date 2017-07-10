/**
 * Created by Silen on 2017/7/8.
 */
(function(angular){
    var app=angular.module('blog',['blog_common','blog_login','blog_register','blog_vr','blog_python','blog_news','blog_home','blog_blog','blog_answer','ngRoute']);
    app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
        $locationProvider.hashPrefix('');
    }])

})(angular)