/**
 * Created by Emad on 10/7/2016.
 */
(function() {
    'use strict';
    angular.module('AssignApp', [])
        .controller('AssignController', function ($scope) {
        $scope.name = "";
        $scope.message = "";
        $scope.displayMessage=function(){
            if( $scope.name == '')
                $scope.message="Please enter data first";
            var array =$scope.name.split(',');
            if(array[0]==1&& array[1]==2 && array[2]==3)
                $scope.message="Enjoy!";

        }
    })
})();

