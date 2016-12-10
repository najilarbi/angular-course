(function(){
     'use strict';
    var app =  angular.module('LunchCheck', []);
    app.controller('LunchCheckController' , LunchCheckController);
    LunchCheckController.$inject=['$scope'];

    function  LunchCheckController($scope){
         $scope.lunchList = "";
         $scope.message="";
         $scope.checkList = function(){
             var str = $scope.lunchList;
               if(str){
                   var result = str.split(",");
                   if(result.length<=3){
                       $scope.message = 'Enjoy!';
                   }else {
                       $scope.message = 'Too much!';
                   }
               }else{
                   $scope.message="Please enter data first";
               }
         };
    };
})();

