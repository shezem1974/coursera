/**
 * Created by Emad on 10/7/2016.
 */
(function(){
    'use strict';
     angular.module('myFirstApp',[])
    .controller('myFirstController',function($scope){
             $scope.name="Emad";
             $scope.sayHello=function(){
               return "Hello Coursera";
             };

        });
})
();


