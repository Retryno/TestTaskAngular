'use strict';
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['Phone', function BasketListController() { }]
  })
  .controller('deleteFromBasket', $scope => {
    $scope.phones = JSON.parse(localStorage.getItem('basketData'));
    $scope.deleteFromBasket = id => {
      $scope.phones = $scope.phones.filter(i => i.id !== id);
      localStorage.setItem('basketData', JSON.stringify($scope.phones));
      toastr.success(id + ' Видалено з корзини')
    }
     $scope.addGoods = id => {
      let elem = $scope.phones.find(i => i.id == id);
      elem.count++;
      localStorage.setItem('basketData', JSON.stringify($scope.phones));
    }
    $scope.deleteGoods = id => {
      let elem = $scope.phones.find(i => i.id == id);
      elem.count > 1 && elem.count--;
      localStorage.setItem('basketData', JSON.stringify($scope.phones));
    }
  });
