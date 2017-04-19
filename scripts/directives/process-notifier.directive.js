(function(){
    'use strict';
    var app = angular.module('process.notifier')

    .directive('processNotifier', ['$compile', '$timeout', function($compile, $timeout){
        return {
            restrict: 'A',
            controller: function(){

            },
            link: function(scope, elem, attr){
                
            }
        }
    }]);
})();