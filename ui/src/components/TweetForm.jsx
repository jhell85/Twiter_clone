import React, { useState, useEffect, useGlobal } from "reactn";
import { Redirect } from "react-router-dom";
import client from "../api/client";

const TweetForm = (props) => {
    const [formState, setFormState] = useState({
        body: ""
    })
    const { 0: token  } = useGlobal("token");

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async e => {
        e.preventDefault();
        await client.post("/tweet", formState, {
            headers: { Authorization: `Bearer ${token}`}
        });
        setFormState({
            body: ""
        });
        if(props.onSuccess) props.onSuccess();

    }
    return(
    <div>
        <form onSubmit={handleSubmit} className="Form">
            <textarea name="body" rows="10" cols="30" onChange={handleChange} value={formState.body}></textarea>
            <button>add Tweet</button>
        </form>
    </div>
    )
}

export default TweetForm;