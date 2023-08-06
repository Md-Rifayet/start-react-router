import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log(friend)
    return (
        <div>
            <h3>Everything about this perso is here</h3>
            <h4>{friend.name}</h4>
            <p>{friend.phone}</p>
        </div>
    );
};

export default FriendDetail;

