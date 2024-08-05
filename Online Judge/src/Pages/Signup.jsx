import React from 'react'

const Signup = () => {
  return (
    <>
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 flex h-full min-h-screen items-center justify-center">
      <div className=" bg-gradient-to-b shadow-[0_0px_50px_0px_rgb(0,0,0,0.3)]  from-slate-400 to-slate-300 rounded-2xl flex flex-col max-w-a w-a p-a pb-10 my-4">
      <div className=' text-center text-3xl storn font-bold'>Sign Up</div>
      <form className="flex flex-col items-center py-a">
        <input className="w-1/2 my-6 rounded-lg p-1 shadow-[0_0px_20px_0px_rgb(0,0,0,0.3)]" type='text' id='fname' placeholder='First Name' name='fname'/>
        <input className="w-1/2 my-6 rounded-lg p-1 shadow-[0_0px_20px_0px_rgb(0,0,0,0.3)]" type='text' id='lname' placeholder='Last Name' name='lname'/>
        <div className='flex items-center'>
        <input className=" my-6" type="radio" id='male' name='Gender' value="male"/>
        <label className=" my-6  ml-1 mr-5" htmlFor='male'>Male</label>
        <input className=" my-6" type="radio" id='female' name='Gender' value={"female"}/>
        <label className=" my-6  ml-1 mr-5" htmlFor='female'>Female</label>
        <input className=" my-6" type="radio" id='other' name='Gender' value={"other"}/>
        <label className=" my-6  ml-1 mr-5" htmlFor='other'>Other</label>
        </div>
        <input className="w-1/2 my-6 rounded-lg p-1 shadow-[0_0px_20px_0px_rgb(0,0,0,0.3)]" type='email' id='email' placeholder='Email' name='email'/>
        <input className="w-1/2 my-6 rounded-lg p-1 shadow-[0_0px_20px_0px_rgb(0,0,0,0.3)]" type='password' id='psword' placeholder='Enter Password' name='Password1'/>
        <input className="w-1/2 my-6 rounded-lg p-1 shadow-[0_0px_20px_0px_rgb(0,0,0,0.3)]" type='password' id='psword1' placeholder='Re Enter Password' name='Password2'/>      
        <input className="transition ease-linear mt-5 hover:shadow-[0_0px_20px_0px_rgb(0,0,0,0.4)] shadow-[0_0px_10px_0px_rgb(0,0,0,0.3)] hover:bg-slate-900  bg-slate-800 text-slate-200 px-2 py-1 rounded-md " type='submit' name="submit"/>
      </form>
      </div>
    </div>
    </>
  )
}

export default Signup