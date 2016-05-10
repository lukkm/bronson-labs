/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.charts.chartJs')
    .controller('chartJs1DCtrl', chartJs1DCtrl);

  /** @ngInject */
  function chartJs1DCtrl($scope, $http) {

    /*var url = "https://news-visualization-be.herokuapp.com/news-visualization/api/statistics/by-category?from=2016-01-01&to=2016-01-20&category=Deportes";
    d3.json(url, function(error, data) {
      var a = data;
      console.log(data);
    });*/

    $http({
      url: "http://localhost:4000/api/by-category?from=2016-01-01&to=2016-01-20&category=Deportes",
      method: 'GET'
    }).success(function(data) {
          var a = data;
          console.log(data);
        })
        .error(function(data){
          console.log("Holis");
        });

    $scope.labels =["Sleeping", "Designing", "Coding", "Cycling"];
    $scope.data = [20, 40, 5, 35];
    $scope.options = {
      segmentShowStroke : false
    };

    $scope.polarOptions = {
      scaleShowLabelBackdrop : false,
      segmentShowStroke : false
    };

    $scope.changeData = function () {
      $scope.data = shuffle($scope.data);
    };

    function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x){}
      return o;
    }
  }

})();