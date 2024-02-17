import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'

import AccountDropDown from './AccountDropDown'
//onProgress
const EditProfile = ({login}) => {
    const[fn,setFn]=useState("")
    const[ln,setLn]=useState("")
    const[email,setEmail]=useState("")
    const[address,setAdress]=useState("")
    const[password,setPasword]=useState("")
    const[confPass,setConfPass]=useState("")
const add=()=>{
    axios.put(`http://localhost:3000/api/users/edit/${login.user.UserID}`,{
        FirstName:fn,LastName:ln,Email:email,Password:confPass
    }).then(r=>console.log('updated')).catch(err=>console.log(err))
}

    return (
        <>
        <Navbar/>
        <div className='ml-20 mt-20 mr-10 '>
            <h1 className='text-gray-400'>Home / <span className='text-black'>My Account</span></h1>
            <h1 className='absolute right-60'>Welcome {login&&login.user&&login.user.FirstName?login.user.FirstName:""}</h1>
            <div className='grid mt-24' style={{'grid-template-columns':'20% 80%'}}>
                <div>
                    <h1>Manage My Account</h1>
                    <h3 className='ml-10 mt-4 text-gray-400'>My Profile</h3>
                    <h3 className='ml-10 mt-4 text-gray-400'>Adress Book</h3>
                    <h3 className='ml-10 mt-4 text-gray-400 mb-5'>My Payment Options</h3>
                    <h1>My Orders</h1>
                    <h3 className='ml-10 mt-4 text-gray-400'>My Returns</h3>
                    <h3 className='ml-10 mt-4 text-gray-400'>My Cancellations</h3>
                    <h1 className='mt-4'>My WishList</h1>
                    </div>
                <div className='p-10 shadow w-5/6 h-5/6 ' style={{'height':'105%'}}>
                    <h1 className='text-red font-bold text-lg mb-10'>Edit Your Profile</h1>
                    <div className='grid grid-cols-2'>
                        <div>
                            <h1 className=' text-black mb-4 '>First Name</h1>
                            <input
                            onChange={(e)=>setFn(e.target.value)} 
                            type='text'
                            placeholder='Md'
                            className=' bg-gray rounded pl-4 w-80 h-12 '/>
                        </div>
                        <div>
                        <h1 className='text-black mb-4'>Last Name</h1>
                            <input 
                            onChange={(e)=>setLn(e.target.value)}
                            type='text'
                            placeholder='Rimel'
                            className=' bg-gray rounded pl-4 w-80 h-12'
                            />
                        </div>
                        </div>
                        <div className='grid grid-cols-2'>
                        <div>
                            <h1 className='text-black mb-4 mt-4'>Email</h1>
                            <input 
                            onChange={(e)=>setEmail(e.target.value)}
                            type='email'
                            placeholder='rimel@gmail.com'
                            className=' bg-gray rounded pl-4 w-80 h-12 '/>
                        </div>
                        <div>
                        <h1 className='text-black mb-4 mt-4'>Adress</h1>
                            <input 
                            onChange={(e)=>setAdress(e.target.value)}
                            type='text'
                            placeholder='Kingston,5236,United State'
                            className='w-80 h-12 bg-gray rounded pl-4'/>
                        </div>
                        </div>
                        <div>
                            <h1 className='text-black mt-4 mb-4'>Password Changes</h1>
                            <input

                             type="password" placeholder='Current Password'  className='text-gray-200 h-12 bg-inputs rounded pl-4 mb-2 w-5/6' style={{'width':'89%'}}/><br/>
                            <input onChange={(e)=>{setConfPass(e.target.value)}} type="password" placeholder='New Password'  className='h-12 bg-inputs rounded pl-4 mb-2 w-5/6'  style={{'width':'89%'}}/><br/>
                           
                            <input type="password" placeholder='Confirm New Password'  className='h-12 bg-inputs rounded pl-4 w-5/6'  style={{'width':'89%'}}/><br/>
                        </div>
                        <div className='mt-10' style={{'margin-left': '57%;'}}>
                        <button className='text-black  bg-white mr-8 '>Cancel</button>
                        <button className='text-white w-44 h-14 bg-red rounded' onClick={()=>add()}>Save Changes</button>
                        </div>
                
                </div>

            </div>

        </div>
        <Footer className='mt-10'/>
        </>
    )
}

export default EditProfile