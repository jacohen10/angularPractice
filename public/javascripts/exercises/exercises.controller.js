var app = angular.module("fitster");
app.controller("exercisesController", function(){
  this.exercises = [
    {exerciseName: "pushups", exerciseCount: 3},
    {exerciseName: "wall sits", exerciseCount: 2},
    {exerciseName: "cardio", exerciseCount: 3},
    {exerciseName: "russian twists", exerciseCount: 4}
  ];

  this.formIsVisible = false;
  this.toggleForm = function(){
    console.log("toggleform");
    if(this.formIsVisible){
      this.formIsVisible = false;
    }
    else{
      this.formIsVisible = true;
    }
  };

  this.create = function(){
    this.exercises.push({exerciseName: this.exerciseName, exerciseCount: this.exerciseCount});
    this.exerciseName = "";
    this.exerciseCount = "";
  };

  this.edit = function(index){
    var exercise = this.exercises[index];
    this.exerciseName = exercise.exerciseName;
    this.exerciseCount = exercise.exerciseCount;
  };

  this.update = function(index){
    this.exercises[index].exerciseName = this.exerciseName;
    this.exercises[index].exerciseCount = this.exerciseCount;
  };

  this.delete = function(index){
    this.exercises.splice(index, 1);
  };

});
