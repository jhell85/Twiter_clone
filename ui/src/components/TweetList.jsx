import React, { useState, useEffect, useGlobal } from "reactn";
import { Redirect } from "react-router-dom";
import client from "../api/client";

const TweetList = (props) => {
    // const [tweets, setTweets] = useState([]);
    // const [loading, setLoading] = useState(true);

    // const getTweets = async () => {
    //     const response = await client.get("/tweet");

    //     setTweets(response.data);
    //     setLoading(false);
    // };

    // useEffect(() => {
    //     getTweets();
    // }, []);
    return (
        <>
            <div className="Tweet">
                {/* {loading && (<em>Loading...</em>)} */}
                {props.tweets.map((tweet) =>(
                    <div key= {tweet._id}>
                    tweet: {tweet.body}
                    <br></br>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TweetList;