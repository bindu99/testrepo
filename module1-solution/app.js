(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.input = "";
  $scope.output="";
  $scope.check = function () {
    var dishStr = $scope.input;
    if(dishStr == "")
    {
      message ="Please enter data first"
    }
    else {
    var dishes = dishStr.split(',');
    var message ="";
    if(cleanArray(dishes).length>=3)
    {
    message ="Too much!"
    }
    else {
      message ="Enjoy!"
    }
  }
    $scope.output = message;
  };
  function cleanArray(actual) {
  var newArray = new Array();
  for (var i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}
}

})();
