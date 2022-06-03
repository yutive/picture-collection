import React from 'react';
import {useNavigate} from "react-router-dom";
import {UserAuth} from "../context/AuthContext";

const Account = () => {
    const {user, logout} = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout()
            navigate('/signin')
            console.log("You are logged out")
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <div className="max-w-[600px] mx-auto my-4  p-4">
            <h1 className="text-2xl font-bold py-4">Account</h1>
            <p>User Email: {user && user.email}</p>

            <button onClick={handleLogout}
                    className="hover:bg-violet-500 bg-violet-600 text-white font-medium py-1 px-2 rounded mb-3 mt-3 mr-3 overflow-x-auto">Logout
            </button>
        </div>
    );
}

export default Account;