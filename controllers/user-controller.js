const {User,Thought} =require('../models');

const userController= {
    // get all Users 
    getAllUser(req,res)
    {
        User.find({})
        // populate user's thoughts
        .populate({
            path:'thoughts',
            select:'__v'
        })
        // populate user friends
        .populate({
            path: 'friends', 
            select: '-__v'})
        .select('-__v').sort({_id:-1})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
        console.log(err);
        res.sendStatus(400);
        });
    },

    // Get single user by id 
    getUserById({params},res)
    {
        User.findOne({_id :params.id})
        .populate({
            path:'thoughts',
            select:'__v'
        })
          // populate user friends
        .populate({
              path: 'friends', 
              select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => {
            if(!dbUserData)
            {
                res.status(404).json({message: 'No User with this id !'});
                return; 
            }res.json(dbUserData)
        })
        .catch(err => {
        console.log(err);
        res.sendStatus(400);
        });

    },

    // update user data by id  
    updateUser({params,body},res)
    {
        User.findOneAndUpdate({_id:params.id},body, {new:true,runValidators: true})
        .then(dbUserData => {
            if(!dbUserData){
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
        alert(err);
        res.sendStatus(400);
        });
    },

    //Delete a user by id 
    deleteUser({params},res)
    {
        User.findOneAndDelete({_id:params.id})
        .then(dbUserData => {
            if(!dbUserData){
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
        alert(err);
        res.sendStatus(400).json(err);
        });

    },

    // create a new user 
    createUser({ body }, res) {
        User.create(body)
          .then(dbUserData => res.json(dbUserData))
          .catch(err => res.json(err));
    },
    // Add a friend 

    // Remove a friend

}

//export user route 
module.exports = userController;