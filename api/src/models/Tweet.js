const mongoose = require("mongoose");

const { Schema } = mongoose;

const tweetSchema = Schema({
    body:{
        type: String,
        required: true,
    },
    comments:[],
}, {
    timestamps: true,
    toJSON: {
      virtuals: true,
    }
});


const Tweet = mongoose.model(Tweet, tweetSchema);

module.exports = Tweet;