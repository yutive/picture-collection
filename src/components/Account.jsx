import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {UserAuth} from "../context/AuthContext";

const Account = () => {
    const {user, logout, resetPassword} = UserAuth();
    const navigate = useNavigate();
    const [alert, setAlert] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setAlert(false);
        }, 6000);
    }, [alert]);

    const handleLogout = async () => {
        try {
            await logout()
            navigate('/')
            console.log("You are logged out")
        } catch (e) {
            console.log(e.message)
        }
    }

    const handlePasswordReset = async () => {
        try {
            await resetPassword(user.auth, user.email)
            setAlert(true);
        } catch (e) {
            console.log(e.message)
        }
    }
    /*
        const handleChangeEmail = (event) => {
            event.preventDefault()
            debugger
            updateEmail(user, newEmail).then(() => {
                setNewEmail('')
            }).catch(error => console.log(error))
        } */

    return (
        <div className="max-w-[600px] mx-auto my-4  p-4">
            <h1 className="text-2xl font-bold py-4">Account</h1>
            {alert && <div
                className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800">
                <span className="font-medium">Email was sent!</span> We sent you an E-Mail for resetting your
                password.
            </div>}
            <p>User Email: {user && user.email}</p>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                    <button onClick={handleLogout}
                            className="flex justify-center hover:bg-violet-500 bg-violet-600 text-white font-medium py-1 px-2 rounded lg:mb-3 lg:mt-3 overflow-x-auto">
                        Logout
                    </button>
                    <button onClick={handlePasswordReset}
                            className="flex justify-center hover:bg-violet-500 bg-violet-600 text-white font-medium py-1 px-2 rounded lg:mb-3 lg:mt-3 overflow-x-auto">
                        Reset Password
                    </button>
                </div>
            </div>
        </div>);
}

export default Account;