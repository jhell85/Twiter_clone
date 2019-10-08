const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types;

const tweetSchema = Schema({
    body:{
        type: String,
        required: true,
    },
    comments:[],
    user: {
        type: ObjectId,
        ref: "User"
    }
}, {
    timestamps: true,
    toJSON: {
      virtuals: true,
    }
});


const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;