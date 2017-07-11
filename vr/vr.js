/**
 * Created by Silen on 2017/7/10.
 */
(function(angular){
    var vr =angular.module('blog_vr',['ngRoute']);
    vr.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/VR',{
            templateUrl:'./vr/vr.html',
        })
    }])
})(angular)