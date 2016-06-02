angular
  .module('App', [])
  .controller('AppController', function ($scope) {
    $scope.categorias = [
      { nome: "Categoria 1" },
      { nome: "Categoria 2" },
      { nome: "Categoria 3" },
      { nome: "Categoria 4" },
      { nome: "Categoria 5" }
    ];
    $scope.cervejas = [
      { nome: "Eisenbahn", volume: 8 },
      { nome: "Gebenha", volume: 7 },
      { nome: "Brahma", volume: 5 }
    ];
    $scope.salvarCerveja = function (cerveja) {
      var novaCerveja = angular.copy(cerveja);
      if (cerveja.id) {
        $scope.cervejas[cerveja.id] = novaCerveja;
      } else {
        $scope.cervejas.push(novaCerveja)
      }
      $scope.cerveja = {};
    }
    $scope.popularForm = function ($index, cerveja) {
      cerveja.id = $index;
      $scope.cerveja = angular.copy(cerveja);
    }
    $scope.deletarCerveja = function ($index, cerveja) {
      if (confirm("Tem certeza que deseja remover a cerveja: " + cerveja.nome + "?")) {
        $scope.cervejas.splice($index, 1);
      }
    }
  });