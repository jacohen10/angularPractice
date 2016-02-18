"use strict";

(function(){
  angular
  .module("exercises")
  .controller("BLSController", [
    "BLSFactory",
    BLSControllerFunction
  ]);

  function BLSControllerFunction(BLSFactory){
    this.bls = BLSFactory.get();
    console.log(this.bls);
  }
}());
