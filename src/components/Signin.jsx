import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import {UserAuth} from "../context/AuthContext";


const Signin = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(null)
    const {signIn} = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await signIn(email, password);
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
                    Sign in to your account
                </h1>
                <p className="py-2">
                    Don't have an account yet? <Link to='/signup' className='text-violet-700 hover:underline'> Sign
                    up. </Link>
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
                    className="w-full hover:bg-violet-500 bg-violet-600 text-white font-medium py-1 px-2 rounded mb-3 mt-3 mr-3 overflow-x-auto">
                    Sign in
                </button>
            </form>
        </div>
    )
}

export default Signin;