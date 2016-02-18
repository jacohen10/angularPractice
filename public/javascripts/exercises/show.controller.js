"use strict";

(function(){
  angular
  .module("exercises")
  .controller("ExerciseShowController", [
    "ExercisesFactory",
    "$stateParams",
    ExerciseShowControllerFunction
  ]);

  function ExerciseShowControllerFunction(ExercisesFactory, $stateParams){
    this.exercise = ExercisesFactory.get({id: $stateParams.id});
  }
}());
