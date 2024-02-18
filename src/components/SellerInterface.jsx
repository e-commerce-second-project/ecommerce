import React, { useEffect, useState } from 'react'
import { NavLink,useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Footer from './Footer'
import BrowseCategory from './BrowseCategory';
import { CgProfile } from "react-icons/cg";
import Concurrence from './Concurrence';
import AccountDropDown from './AccountDropDown';


const Seller = () => {
  const navigate=useNavigate()
  return (
    
           
    <div>
    <div className='flex items-center gap-2 h-10 bg-black text-white justify-center align-middle'>
            <h3 className='text-'>Make Discount on your sales and win Gold Coupon </h3></div>
            <div className='flex justify-center gap-8 mt-11 mb-6'>
        <NavLink to={'/seller'} >Home</NavLink>
        <NavLink to={'/contactAdmin'}>Contact Administration</NavLink>
        <NavLink to={'/addforsale'}>Add For Sale</NavLink>
        <NavLink to={'/allmysales'}>All My Sales </NavLink>

        <div className='w-auto h-8 flex float-right gap-16 absolute right-10 top-20'>
            <CgProfile size={25} onClick={()=>navigate('/edit')} />
            
        </div>
        </div>
 <img className='w-full h-96' src='https://www.business2community.com/wp-content/uploads/2020/11/ecommerce-2140603_1920-1.jpg'/>
<div className='my-40'>
<Concurrence/>
</div>
<div className='my-40'>
<BrowseCategory /></div>
<div> <Footer/> </div>


    </div>

  )

}

export default Seller;