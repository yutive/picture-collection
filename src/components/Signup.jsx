import React, {useState} from "react";
import {Link,useNavigate} from "react-router-dom";
import {UserAuth} from "../context/AuthContext";

const Signup = () => {
    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    const [error,setError] = useState(null)
    const {createUser} = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await createUser(email,password);
            navigate('/account')
        } catch (e) {
            setError(e.message)
            console.log(error)
        }
    }

    return (
        <div className="max-w-[700px] mx-auto my-12 p-4">
            <div>
                <h1 className="text-2xl font-bold py-2">
                    Sign up for a Account
                </h1>
                <p className="py-2">
                    Already have an account yet? <Link to='/signin' className='text-violet-700 hover:underline'> Sign
                    in. </Link>
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col py-2'>
                    <label className="py-2 font-medium">Email Address</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="border p-3"/>
                </div>
                <div className="flex flex-col py-2">
                    <label className="py-2 font-medium">Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" className="border p-3"/>
                </div>
                <button
                    className="w-full hover:bg-violet-500 bg-violet-600 text-white font-medium py-1 px-2 rounded mb-3 mt-3 mr-3 overflow-x-auto">Sign
                    Up
                </button>
            </form>
        </div>
    )
}

export default Signup;