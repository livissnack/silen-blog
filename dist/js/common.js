(function(angular){
    var common=angular.module('blog_common',[]);
    //����logo�Ķ���Ч��
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
    //�Զ���ָ�����ڵ�����tab�л���ɫ
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
    //jsonp�ķ�װ
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
    //�Զ���ָ�������滻��ҳ��ǩ����
    common.directive('disableBtn',function(){

    })
})(angular)



