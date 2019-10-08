import React, { useState, useEffect, useGlobal } from "reactn";
import client from "../api/client";
import TweetForm from "../components/TweetForm";
import TweetList from "../components/TweetList"



const Profile = () => {
  const [profile, setProfile] = useState(null);
  const { 0: token } = useGlobal("token");
  
  const getProfile = async () => {
    const { data } = await client.get("/auth/profile", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    setProfile(data);
  }

  useEffect(() => {
    getProfile();
  }, [token]);

  return (
    <div>
      <h1>Profile:</h1>
      {profile && (
        <>
          <em>{profile.email}</em>
          <h3>Write a Tweet</h3>
          <TweetForm onSuccess={getProfile}/>
          <h3>Your Tweets</h3>
          <TweetList tweets={profile.tweets} />
        </>
      )}
    </div>
  )
}

export default Profile;