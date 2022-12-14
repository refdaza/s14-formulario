let app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
  $scope.salarioBasico = function () {
    return $scope.horas * $scope.tarifa;
  };
  $scope.descuento = function () {
    let salario = $scope.salarioBasico();
    if (salario <= 500) {
      return 0;
    } else if (salario <= 1000) {
      return salario * 0.02;
    } else if (salario <= 4000) {
      return salario * 0.08;
    } else if (salario <= 8000) {
      return salario * 0.15;
    } else if (salario <= 10000) {
      return salario * 0.21;
    } else if (salario >= 10000) {
      return salario * 0.3;
    }
  };
  $scope.salarioNeto = function () {
    return $scope.salarioBasico() - $scope.descuento();
  };
});
