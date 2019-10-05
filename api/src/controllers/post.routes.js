const Tweet = require("../models/Tweet");
const { AsyncRouter } = require("express-async-router");

const router = AsyncRouter();

// Create route
router.post(
    "/tweet",
    async (req, res) => {
        const tweet = new Tweet(req.body);
        await tweet.save();

        res.status(201).send(tweet);
    }
);