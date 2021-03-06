
const { Thought, User} = require('../models');

const thoughtController = {
  // create a new thought 
  addThought({params,body }, res) {
    Thought.create(body)
    .then(({_id}) => {
        return User.findOneAndUpdate(
          { _id: params.id},
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
     
  },
  // get all thoughts 
  getAllThoughts({params},res)
  {
    Thought.find({})
    .populate({
      path:'reactions',
      select:'-_v'
    })
    .select('-_v')
    .sort({_id : -1})
    .then(dbThoughtData => {
      res.json(dbThoughtData)
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json(err);
    });
  },

  
  // Get thoughts by id 
  getThoughtById(req,res)
  {
    Thought.findOne({_id:req.params.thoughtId})
    .populate({path: 'reactions',select: '-__v'})
    .select('-_v')
    .then(dbThoughtData => {
      if(!dbThoughtData) {
      res.status(404).json({message: 'No thoughts with this id'});
      return;
      }
      res.json(dbThoughtData)
    })
    .catch(err =>{
      console.log(err);
      res.status(400).json(err);
    });
  },

  //update a thought
  updateThought({params,body},res)
  {
    Thought.findOneAndUpdate(
      {_id:params.thoughtId},
      body,
      {new:true,runValidators: true})
    .populate({path:'reactions',select:'-_v'})
    .select('-_v')
    .then(dbThoughtData =>{
      if (!dbThoughtData) {
        res.status(404).json({ message: 'No thought found with this id!' });
        return;
      }
      res.json(dbThoughtData);
    })
    .catch(err => res.json(err));

  },
  // delete a thought
  removeThought({params}, res) {
    Thought.findOneAndDelete({_id: params.thoughtId})
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        return User.findOneAndUpdate(
            { _id: params.id },
            { $pull: { thoughts: params.thoughtId } },
            { new: true } 
        );
      
      })
      .then(dbUserData => {

        res.json(dbThoughtData);
      })   
      .catch(err => res.json(err));
  },

  addReaction({ params, body }, res) {
    console.log(body);
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { reactions: body } },
      { new: true }
    )
    .populate({path:'reactions', select: '-_v'})
    .select('-_v')
    .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
    })
      .catch(err => res.json(err));
  },
  // remove reaction
removeReaction({ params }, res) {
  Thought.findOneAndUpdate(
    { _id: params.thoughtId },
    { $pull: { reactions: { reactionId: params.reactionId } } },
    { new: true }
  )
    .then(dbThoughtData => {
      if(!dbThoughtData){
        res.status(404).json({message: 'No thoughts with this id'});
        return;
      }
      res.json(dbThoughtData)})
    .catch(err => res.json(err));
}
};
//Export module
module.exports = thoughtController;
