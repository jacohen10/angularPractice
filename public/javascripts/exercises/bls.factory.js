(function(){
  angular
  .module("exercises")
  .factory("BLSFactory", [
    "$resource",
    FactoryFunction
  ]);

  function FactoryFunction($resource){
    return $resource("/bls");
  }

}());
