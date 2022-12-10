import React, { useEffect, useState } from "react";
import Tuits from "../tuits";
import * as authService from "../../services/auth-service";
import * as UserService from "../../services/users-service";
import * as likeService from "../../services/likes-service";
import { useNavigate } from "react-router-dom";
function Likedhistory() {


    const navigate = useNavigate();
    const [myLikedTuits, setMyLikedTuits] = useState([]);
    const [authprofile, setAuthProfile] = useState({});

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const user = await authService.profile();
                console.log('current user: '+JSON.stringify(user));
                let tuits = [];

                const likedTuits = await likeService.findTuitsLikedByAUser(user._id);
                for(let i=0;i<likedTuits.length;i++){
                    const userWhoPostedTheTuit= await UserService.findUserById(likedTuits[i].likedTuit.postedBy);
                    tuits.push({...likedTuits[i].likedTuit, postedBy:{username: userWhoPostedTheTuit.username}});
                }
                setMyLikedTuits(tuits);
                setAuthProfile(user);
            } catch (e) {
                alert("session profile not found, send to login page");
                navigate("/profile/login");
            }
        };
        fetchProfile();
    }, [navigate]);


    return (
        <div>
            <h1>Likedhistory</h1>
            <div className="ttr-home">
                <Tuits tuits={myLikedTuits} setMyLikedTuits={setMyLikedTuits} />
            </div>
        </div>
    );
}
export default Likedhistory;
