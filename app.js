angular
    .module('App',[])
    .controller('AppController', function($scope) {
       $scope.categorias = [
           { nome: "Categoria 1" },
           { nome: "Categoria 2" },
           { nome: "Categoria 3" },
           { nome: "Categoria 4" },
           { nome: "Categoria 5" }
       ];
       $scope.cervejas = [
           { nome: "Eisenbahn", volume: "8" },
           { nome: "Gebenha", volume: "7" },
           { nome: "Brahma", volume: "5" }
       ];
       $scope.cadastrarCerveja = function(cerveja) {
           $scope.cervejas.push(cerveja)
       }
    });