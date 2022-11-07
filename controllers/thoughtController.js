const { Thought, User } = require('../models');

module.exports = {
    getThoughts(req, res) {
        Thought.find({})
         .then((thoughts) => res.json(thoughts))
         .catch((err) => res.status(500).json(err));
    },
    getOneThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId})
         .then((thought) => 
         !thought
         ? res.status(404).json({ message: "No thought found"})
         : res.json(thought)
        )
         .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        Thought.create(req.body)
         .then((thought) => {
            return User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: thought._id }},
                { new: true }
            );
        })
        .then((user) => 
        !user 
        ? res.status(404).json({ message: "Something went wrong (thought created)"})
        : res.json("Success!")
        )
        .catch((err) => {
        res.status(500).json(err)
        });
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'Not found' })
              : res.json(thought)
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
    },
    deleteThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'Not found' })
              : User.findOneAndUpdate(
                  { thoughts: req.params.thoughtId },
                  { $pull: { applications: req.params.thoughtId } },
                  { new: true }
                )
          )
          .then((user) =>
            !user
              ? res.status(404).json({
                  message: 'Thought deleted  but no user with this id!',
                })
              : res.json({ message: 'Thought successfully deleted!' })
          )
          .catch((err) => res.status(500).json(err));
    },
}