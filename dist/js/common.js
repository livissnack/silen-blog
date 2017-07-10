(function(angular){
    var common=angular.module('blog_common',[]);
    //用于logo的动画效果
    common.directive('animate',function(){
        return{
            restrict:'EA',
            link:function(scope,element,attrs){
                var index = 0;
                var word = $(element).html();
                setInterval(function () {
                    if (index <= word.length) {
                        $(element).text(word.substring(0, index++));
                    } else {
                        index=1;
                    }
                }, 500);
            }
        }
    })
    //自定义指令用于导航栏tab切换变色
    common.directive('navactive',function(){
        return{
            restrict:'EA',
            link:function(scope,element,attrs){
                element.on('click',function(){
                    element.parent().children().removeClass('active');
                    element.addClass('active')
                })
            }
        }
    })
    //jsonp的封装
    common.service('$jsonp',['$window',function($window){
        this.jsonp=function(opts){
            var url =(opts.url+'?');
            for(var key in opts.params){
                url += (key+'='+opts.params[key]+'&');
            }
            var callbackName=('jsonp_'+$window.Math.random().toString().slice(2));
            $window[callbackName]=opts.callback;
            url += ('callback='+callbackName);
            var script=document.createElement('script');
            script.src=url;
            $window.document.body.appendChild(script);
        }
    }])
    //自定义指令用于替换分页标签禁用
    common.directive('disableBtn',function(){

    })
})(angular)



