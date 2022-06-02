import React from "react";
import {Link} from "react-router-dom";

const Signup = () => {
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
            <form>
                <div className='flex flex-col py-2'>
                    <label className="py-2 font-medium">Email Address</label>
                    <input type="email" className="border p-3"/>
                </div>
                <div className="flex flex-col py-2">
                    <label className="py-2 font-medium">Password</label>
                    <input type="email" className="border p-3"/>
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