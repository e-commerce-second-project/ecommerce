// import React, { useState } from "react";
// import { Button } from "./Button";
// import { NavLink, useNavigate } from "react-router-dom";
// import Footer from "./Footer";
// import axios from "axios";
// import {useAuth} from "../AuthContext/authcontext.jsx"


// export const Signup = () => {
//   const { setToken } = useAuth();
//   // console.log("se",setAuth);

// const[name,setName] =useState('')
// const[email,setEmail] =useState('')
// const[password,setPassword] =useState('')
// const navigate=useNavigate()

// const add=()=>{
// axios.post('http://localhost:3000/auth/signup',{ Password:password, Email:email, FirstName:name})
// .then(res=>{
//   setToken(res.data.token)
//   // console.log("tok",res.data.token);
//   console.log('added')})
// .catch(err=>console.log(err))
// }


//   return (
//     <div>
//        <nav >
//         <div className='flex justify-center gap-8 mt-11 mb-6'>
//         <h1 className='absolute left-20 font-bold text-xl'>Exlusive</h1> 
//         <NavLink to={'/home'} >Home</NavLink>
//         <NavLink to={'/contact'}>Contact</NavLink>
//         <NavLink to={'/AboutUs'}>AboutUs</NavLink>
//         <NavLink to={'/'}>Sing up</NavLink>
//         </div>
//        </nav>
//     <div className="bg-white flex flex-row justify-center w-full ">
//       <div className="bg-bg w-[1440px] h-[1561px]">
//         <div className="items-center gap-[129px] top-[45px] left-[67px] inline-flex relative">
//           <div className="relative w-[805px] h-[630px] bg-[#cbe4e8] rounded-[0px_4px_4px_0px] overflow-hidden">
//             <img
//               className="absolute w-[805px] h-[600px] top-[0px] left-4"
//               alt="Dl beatsnoop"
//               src="https://i.imgur.com/nxyvDFz.png"
//             />
//           </div>
//           <div className="flex-col items-start gap-[48px] flex-[0_0_auto] inline-flex relative">
//             <div className="flex-col items-start gap-[24px] flex-[0_0_auto] inline-flex relative">
//               <div className="relative w-fit mt-[-1.00px] font-heading-36px-medium font-[number:var(--heading-36px-medium-font-weight)] text-text-2 text-[length:var(--heading-36px-medium-font-size)] tracking-[var(--heading-36px-medium-letter-spacing)] leading-[var(--heading-36px-medium-line-height)] whitespace-nowrap [font-style:var(--heading-36px-medium-font-style)]">
//                 Create an account
//               </div>
//               <div className="relative w-fit font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text-2 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
//                 Enter your details below
//               </div>
//             </div>
//             <div className="flex-col items-center gap-[40px] flex-[0_0_auto] inline-flex relative">
//               <div className="flex-col items-start gap-[40px] flex-[0_0_auto] inline-flex relative">
//                 <div className="flex-col items-start gap-[8px] flex-[0_0_auto] inline-flex relative">
//                   <div className="relative w-fit mt-[-1.00px] opacity-40 font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text-2 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
//                    <input type="text" placeholder="Name"
//                    onChange={(e)=>{setName(e.target.value)}} />
//                   </div>
                  
//                 </div>
//                 <div className="flex-col items-start gap-[8px] flex-[0_0_auto] inline-flex relative">
//                   <div className="relative w-fit mt-[-1.00px] opacity-40 font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text-2 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
//                    <input type="text" placeholder="Email or Phone Number"
//                      onChange={(e)=>{setEmail(e.target.value)}}/>
//                   </div>
                 
//                 </div>
//                 <div className="flex-col items-start gap-[8px] flex-[0_0_auto] inline-flex relative">
//                   <div className="relative w-fit mt-[-1.00px] opacity-40 font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text-2 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
//                     <input type="password" placeholder="Password"
//                       onChange={(e)=>{setPassword(e.target.value)}}/>
//                   </div>
                 
//                 </div>
//               </div>
//               <div className="flex-col items-start gap-[16px] flex-[0_0_auto] inline-flex relative">
//                 <Button
//                   button="primary"
                  
//                   className="!flex-[0_0_auto] !px-[122px] !py-[16px]"
//                   hover={false}
//                   text="Create Account"
//                   add={add} 
                 
//                   />
//                 <div className="flex-col items-center gap-[32px] flex-[0_0_auto] inline-flex relative">
//                   <div className="items-center gap-[16px] flex-[0_0_auto] inline-flex relative">
//                     <div className="relative w-fit opacity-70 font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text-2 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
//                       Already have account?
//                     </div>
//                     <div className="flex-col items-start gap-[4px] flex-[0_0_auto] inline-flex relative">
//                       <div onClick={()=>navigate('/login')} className="cursor-pointer relative w-fit mt-[-1.00px] opacity-70 font-title-16px-medium font-[number:var(--title-16px-medium-font-weight)] text-text-2 text-[length:var(--title-16px-medium-font-size)] tracking-[var(--title-16px-medium-letter-spacing)] leading-[var(--title-16px-medium-line-height)] whitespace-nowrap [font-style:var(--title-16px-medium-font-style)]">
//                         Log in
//                       </div>
                      
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <Footer/>
//     </div>
//   );
// };
// export default Signup;