(function(){
  angular
  .module("exercises")
  .factory("ExercisesFactory", [
    "$resource",
    FactoryFunction
  ]);

  function FactoryFunction($resource){
    return $resource("/exercises/:id");
  }

}());
