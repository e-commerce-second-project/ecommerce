// import React, { useState } from 'react'
// import { NavLink,useNavigate } from "react-router-dom";
// import { FaRegHeart } from "react-icons/fa";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { IoSearchOutline } from "react-icons/io5";
// import { CgProfile } from "react-icons/cg";
// import axios from "axios";
// import AccountDropDown from './AccountDropDown';

// const Navbar = ({searching}) => {
//   const navigate=useNavigate()

// const filtred=()=>{
// axios.get('http://localhost:3000/')

// }
// const[e,setE]=useState('')
// const[showAcc,setShowAcc]=useState(false)


//   return (
//     <div className='  bg-white z-10 '>
//         <nav >
//         <div className='flex items-center gap-2 h-10 bg-black text-white justify-center align-middle'>
//             <h3 className='text-'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h3>
//             <span className=' text-lg underline cursor-pointer ml-11'>Shop Now!</span>
//             <select name='English' className='absolute right-5 text-white bg-black'>
//                 <option >English</option>
//             </select>
//         </div>
//               <div className='absolute font-bold text-4xl mt-7 ml-8 mr-8'>   ℰ-ℳ𝒶𝓁𝓁 🛒 </div> 
//         <div className='flex justify-center gap-8 mt-11 mb-6 ml-56'>
//         <NavLink to={'/home'} >Home</NavLink>
//         <NavLink to={'/contact'}>Contact</NavLink>
//         <NavLink to={'/AboutUs'}>AboutUs</NavLink>
//         <NavLink to={'/'} style={{marginRight:'5%'}}>Sing up</NavLink>
//         <div className='w-auto h-8 flex float-right gap-16 ml-6 right-10 top-20'>
//             <input 
//             onChange={(e)=>setE(e.target.value)}
//              type="search"
//             placeholder='What are you looking for?'
//             className='bg-gray-200 p-2 text-xs rounded w-56 h-9 ml-6'/>
//            <IoSearchOutline onClick={()=>{searching(e)
//             navigate('/AllProducts')} } size={25} className=' right-15 top-1 ' style={{marginLeft: '-17%'}}/>
//             <FaRegHeart size={25}/>
       
//             <AiOutlineShoppingCart className='cursor-pointer' size={25} onClick={()=>navigate('/cart')} />
//             <CgProfile  className='cursor-pointer'  size={25} onClick={()=>setShowAcc(!showAcc)}/>
//            {showAcc&& <AccountDropDown/>}
//         </div>
//         </div>
//        </nav>
//            <hr className='text-gray-300'/>

//     </div>
//   )

//   }
// export default Navbar