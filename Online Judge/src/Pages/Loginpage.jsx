import React from 'react'
import { Link } from 'react-router-dom'

const Loginpage = () => {
  return (
    <>
    <div className="flex h-full min-h-screen bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900  items-center justify-center">
        <div className="flex shadow-[0_0px_50px_0px_rgb(0,0,0,0.3)] flex-col bg-gradient-to-b  from-slate-400 to-slate-300 rounded-3xl h-96 w-96 items-center justify-center">
            <div><form>
                <input className=" px-2 w-60 h-8 rounded-lg shadow-[0_0px_20px_0px_rgb(0,0,0,0.3)]" type="email" placeholder="Email" name="Email"/>
                <p><br/></p>
                <input className=" px-2 w-60 h-8 rounded-lg shadow-[0_0px_20px_0px_rgb(0,0,0,0.3)]" type="password" placeholder='Password' name="Password"/>
                <p><br/></p>
                <div className="flex justify-center">
                <input className=" block transition ease-linear hover:shadow-[0_0px_20px_0px_rgb(0,0,0,0.4)] shadow-[0_0px_10px_0px_rgb(0,0,0,0.3)] hover:bg-slate-900  bg-slate-800 text-slate-200 p-1 rounded-md" type="submit" value="Submit"/>
                </div>
            </form></div>
            <div><br/><br/>don't have an account? <Link className="hover:text-pink-700 underline text-blue-700" to={"/signup"}>Sign up</Link></div>
            <div><Link to={"/"}>Forgot Password</Link></div>
        </div>
    </div>
    </>
  )
}

export default Loginpage