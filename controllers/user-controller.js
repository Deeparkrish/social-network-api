const {User,Thought} =require('../models');
const { populate } = require('../models/User');

const userController= {
    // get all Users 
    getAllUser(req,res)
    {
        User.find({})
        // populate user's thoughts
        .populate({
            path:'thoughts',
            select:'-__v'
        })
        .populate(
            {
              path: 'friends',
              select: '-__v'
            }
          )
        .select('-__v').sort({_id:-1})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
        res.sendStatus(400).json(err);
        });
    },

    // Get single user by id 
    getUserById({params},res)
    {
        User.findOne({_id :params.id})
        .populate({
            path:'thoughts',
            select:'-__v'
        })
        .populate(
            {
              path: 'friends',
              select: '-__v'
            }
          )
        .select('-__v')
        .then(dbUserData => {
            if(!dbUserData)
            {
                res.status(404).json({message: 'No User with this id !'});
                return; 
            }res.json(dbUserData)
        })
        .catch(err => {
        res.sendStatus(400).json(err);
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
        res.sendStatus(400).json(err);
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
            User.updateMany(
                {},
                { $pull: { friends: params.id } }
              )
                .then(() => {
                  Thought.deleteMany({ username: dbUserData.username })
                    .then(() => {
                      res.json({ message: "Successfully deleted" });
                      res.json (dbUserData);
                    })
                    .catch((err) => res.status(400).json(err));
                })
            .catch((err) => res.status(400).json(err));

        })

        .catch(err => {
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
    addFriend({params},res)
    {
        User.findOneAndUpdate(
            {_id:params.id},
            { $addToSet: {friends: params.friendId} },
            {new:true})
        .populate({path: 'friends', select: ('-__v')})
        .select('-__v')
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({message: 'No user found with this id!'});
                return;
            }
            // add user id to friend list 
            User.findOneAndUpdate(
                { _id: params.friendId },
                { $addToSet: { friends: params.id.username } },
                { new: true, runValidators: true }
            )
        .then(dbfriendData => {
                if(!dbfriendData) {
                    res.status(404).json({ message: 'No user found with this friendId' })
                    return;
                }
              res.json(dbUserData);
            
            })
    
        .catch(err => res.json(err));   
        })
        .catch(err => res.json(err));   

    },

    // Remove a friend
    removeFriend({params},res){
        User.findOneAndUpdate( {_id:params.id}, { $pull :{ friends:params.friendId}},{new:true})
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({message: 'No user found with this id'});
                return;
            }
            // 
            // remove  the userId from  the friendId's friends 
            User.findOneAndUpdate({_id:params.friendId},{ $pull: { friends: params.userId } },{new:true})
            .then(dbfriendData => {
                if(!dbfriendData) {
                    res.status(404).json({message: 'No friend found with this id'});
                    return;
                }
                res.json(dbUserData);
            })
       .catch(err => res.json(err));
    })
    .catch(err => res.json(err));  
    }
}

//export user route 
module.exports = userController;