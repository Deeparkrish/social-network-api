const { Schema ,model} = require("mongoose");

const UserSchema = new Schema({
    username: {
        type:String,
        unique:true,
        required:[true,'Username cannot be blank'],
        trim:true
    },
    createdBy:{
        type:String,
        required:[true,'name cannot be blank'],
        unique:true,
        validate:{
            validator: function (value){
                return isEmail(value);
            },
            message: (prop) => `${prop.value} is not a valid email address`,

        }
    },
    thoughts:[{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }],
    friends:[{
        type: Schema.Types.ObjectId,
        ref: 'User'
      }]
})
UserSchema.virtual('friendcount').get(function(){
    return this.friends.length;
});
const User = model('User',UserSchema);
module.exports = User;