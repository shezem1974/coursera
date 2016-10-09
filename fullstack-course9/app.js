/**
 * Created by Emad on 10/7/2016.
 */
(function(){
    'use strict';
    angular.module('DIApp',[])
        .controller('DIController',DIController);
    function DIController($scope,$filter){
        $scope.name="Emad";
        $scope.upper=function(){}
        var upCase=$filter('uppercase');
        $scope.name=upCase($scope.name);
    };
})();

