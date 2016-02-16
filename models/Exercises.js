var mongoose = require('mongoose');

var ExerciseSchema = new mongoose.Schema({
  exerciseName: String,
  exerciseCount: Number,
  exerciseTime: {type: Number, default:0}
});

mongoose.model('Exercise', ExerciseSchema);
