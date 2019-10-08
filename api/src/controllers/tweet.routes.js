const Tweet = require("../models/Tweet");
const { AsyncRouter } = require("express-async-router");

const router = AsyncRouter();
const jwtMiddleware = require("../helpers/jwtMiddleware");

// Create route
router.post(
    "/",
    jwtMiddleware,
    async (req, res) => {
        const tweet = new Tweet(req.body);
        tweet.user = req.user._id;
        await tweet.save();

        res.status(201).send(tweet);
    }
);
// List route
router.get(
    "/",
    async (req, res) => {
        const tweet = await Tweet.find()
        res.send(tweet);
    }
);


module.exports = router