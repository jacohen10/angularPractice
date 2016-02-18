'use strict';

(function(){
  angular
  .module("fitster", [
    "ui.router",
    "exercises"
  ]).config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("exercises", {
      url: "/exercises",
      templateUrl: "/javascripts/exercises/index.ejs",
      controller: "ExerciseIndexController",
      controllerAs: "ExerciseIndexViewModel"
    })
    .state("exerciseShow", {
      url: "/exercises/:id",
      templateUrl: "/javascripts/exercises/show.ejs",
      controller: "ExerciseShowController",
      controllerAs: "ExerciseShowViewModel"
    })
    .state("exerciseNew", {
      url: "/exercises/new",
      templateUrl: "/javascripts/exercises/new.ejs",
      controller: "ExerciseNewController",
      controllerAs: "ExerciseNewViewModel"
    })
    .state("BLS", {
      url: "/bls",
      templateUrl: "/javascripts/exercises/bls.ejs",
      controller: "BLSController",
      controllerAs: "BLSViewModel"
    });
  }
})();
