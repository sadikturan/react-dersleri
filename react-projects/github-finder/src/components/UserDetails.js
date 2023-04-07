import { useContext, useEffect,useRef } from "react";
import { useParams } from "react-router-dom";
import { UsersContext } from "../context/usersContext";

const UserDetails = () => {
    const params = useParams();
    const { getUser, user } = useRef(useContext(UsersContext));

    useEffect(() => {
        function loadUser() {
            getUser(params.username);
        }
        loadUser();
    }, []);

    return (
        <div>{ user.name }</div>
    );
}

export default UserDetails;