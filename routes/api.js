const { Workout } = require("../models");
const router = require("express").Router();

router.post("/api/workouts", (req, res) => {
    // console.log(req, res);
    Workout.create({}).then(dbWorkout => {
        res.json(dbWorkout);
    });
});

router.get("/api/workouts", (req, res) => {
    // console.log(req, res);
    Workout.find().then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find().sort({ day: -1 }).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.update({ _id: req.params.id }, { $push: { exercises: req.body } }).then(dbWorkout => {
        res.json(dbWorkout);
    });
});

module.exports = router;